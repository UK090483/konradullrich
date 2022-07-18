import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import SanityImage from "@lib/SanityImage";
import {
  ImageGalleryPlugItem,
  ImageGalleryPlugResult,
} from "../ImageGalleryPlug";
import { useAppColor } from "@components/AppContext/AppContext";

const FramePreview: React.FC<ImageGalleryPlugResult> = (props) => {
  const { items, rows = 4, rows_mobile = 2, ratio = "1:1" } = props;

  if (!items || items.length < 1) return <div>No Images</div>;

  return (
    <div className=" mb-8 flex justify-evenly flex-wrap ">
      {items.map((i) => {
        return <Screen key={i._key} {...i} />;
      })}
    </div>
  );
};

export default FramePreview;

const Screen: React.FC<ImageGalleryPlugItem> = (props) => {
  const { image, size } = props;
  const wrapRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [direction, setDirection] = useState(true);

  const { primary } = useAppColor();

  useEffect(() => {
    if (!ref.current || !wrapRef.current) return;
    const getOffset = () => {
      if (!ref.current || !wrapRef.current) return;
      const { height: wrapHeight } = wrapRef.current.getBoundingClientRect();
      const { height } = ref.current.getBoundingClientRect();
      setOffset(height - wrapHeight);
    };
    if (!offset) {
      getOffset();
    }
    window.addEventListener("resize", getOffset);

    return () => {
      window.removeEventListener("resize", getOffset);
    };
  }, [offset]);

  return (
    <div
      ref={wrapRef}
      style={{ borderColor: primary }}
      className={clsx(
        "relative overflow-hidden rounded-xl border-4 border-primary",
        {
          "w-[90vw] h-[50vw] lg:w-[50vw] lg:h-[28vw] ": size === "l",
          "w-[250px] h-[420px] mt-12": size === undefined,
        }
      )}
    >
      <div
        onTransitionEnd={() => {
          setDirection((i) => !i);
        }}
        style={{
          transform: `translateY(-${direction ? offset : 0}px) `,
          transition: `transform ${10000}ms ease-in-out `,
        }}
        ref={ref}
      >
        <SanityImage image={image} />
      </div>
    </div>
  );
};
