import React, { useEffect, useRef, useState, useMemo } from "react";

import clsx from "clsx";

import {
  ImageGalleryPlugItem,
  ImageGalleryPlugResult,
} from "../../ImageGalleryPlug";
import SanityImage from "@lib/SanityImage";

const Marquee: React.FC<ImageGalleryPlugResult> = (props) => {
  const { items, rows = 4, rows_mobile = 2, ratio = "1:1" } = props;

  const [transition, setTransition] = useState(false);

  useEffect(() => {
    setTransition((i) => !i);
  }, []);

  if (!items || items.length < 1) return <div>No Images</div>;

  return (
    <div className=" py-5 w-full">
      <Slide
        onTransitionEnd={() => {
          setTransition((i) => !i);
        }}
        items={[...items].reverse()}
        transition={transition}
      />
      <Slide items={items} transition={!transition} />
    </div>
  );
};

export default Marquee;

const Slide: React.FC<{
  transition: boolean;
  items: ImageGalleryPlugItem[];
  onTransitionEnd?: () => void;
}> = ({ transition, items, onTransitionEnd }) => {
  const time = useMemo(
    () =>
      items.reduce((acc, item) => {
        if (!item.image) return acc;
        return item.image.aspectRatio > 1 ? acc + 12 : acc + 1;
      }, 0),
    [items]
  );

  return (
    <div className=" w-full  overflow-x-hidden overflow-y-visible py-16  animator ">
      <div
        onTransitionEnd={onTransitionEnd}
        style={{
          transitionDuration: time + "s",
          transitionTimingFunction: "linear",
          transform: `${
            transition ? "translateX(calc(-100% + 100vw))" : "translateX(0)"
          }`,
        }}
        className={clsx("flex gap-24 items-center w-fit transition-transform")}
      >
        {items.map((item) => {
          const {
            image,
            title,
            _key,
            link,
            size = "m",
            contain,
            bgColor = "primary",
          } = item;

          const isLandscape = image && image?.aspectRatio > 1;
          return (
            <div
              key={_key}
              className={clsx(" h-fit rounded-xl overflow-hidden shadow-2xl", {
                "w-[60vw] lg:w-[40vw]": isLandscape,
                "w-[35vw] lg:w-[15vw]": !isLandscape,
              })}
            >
              <SanityImage
                sizes={isLandscape ? "800px" : "300px"}
                image={image}
                layout={"responsive"}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
