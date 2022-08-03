import React, { useState } from "react";
import clsx from "clsx";
import css from "styled-jsx/css";
import SanityImage from "@lib/SanityImage";
import { ImageMetaResult } from "@lib/SanityImage/query";
import { PlugProps } from "@lib/SanityPageBuilder/lib/RichText";

const { className: imageStyle, styles } = css.resolve`
  img {
    border: red solid 10px !important;
    clip-path: url(#svgPath);
  }
`;

type ImagePlugProps = {
  image?: ImageMetaResult | null;
  customWidth?: "1/4" | "1/3" | "1/2" | "2/3" | "full";
  ratio?: "auto" | "3:2" | "5:9" | "16:9" | "1:1";
  position?: "left" | "right" | "center";
  float?: boolean;
};

const sizesMap = {
  "1/4": 25,
  "1/3": 33,
  "1/2": 50,
  "2/3": 66,
  full: 100,
};

const ImagePlug: React.FC<PlugProps<ImagePlugProps>> = (props) => {
  const {
    image,
    customWidth = "1/4",
    ratio = "auto",
    float = false,
    position = "center",
  } = props.node;

  const hasRatio = ratio && ratio !== "auto";
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  if (!image || !image.id) return null;

  const handleMouseMove: React.MouseEventHandler<HTMLImageElement> = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className={" w-full clipIt "} onMouseMove={handleMouseMove}>
      <SanityImage
        className={imageStyle}
        image={image}
        objectFit={hasRatio ? "cover" : undefined}
        layout={hasRatio ? "fill" : "responsive"}
      />

      <svg height="0" width="0">
        <defs>
          <clipPath id="svgPath">
            {/* <circle
              stroke="#000000"
              strokeMiterlimit="10"
              cx={mousePosition.x}
              cy={mousePosition.y}
              r="300"
            />
            <text
              x="60"
              y="700"
              textLength="900px"
              lengthAdjust="spacing"
              fontFamily="Vollkorn"
              fontSize="230px"
              fontWeight="700"
              fontStyle="italic"
            >
              Blossom
            </text> */}
            <path
              fill="#FFFFFF"
              stroke="#000000"
              strokeWidth="1.5794"
              strokeMiterlimit="10"
              d="M200,200.3c97.8-32.6,90.5-71.9,336-77.6
        c92.4-2.1,98.1,81.6,121.8,116.4c101.7,149.9,53.5,155.9,14.7,178c-96.4,54.9,5.4,269-257,115.1c-57-33.5-203,46.3-263.7,20.1
        c-33.5-14.5-132.5-45.5-95-111.1C125.9,246.6,98.6,139.1,215,100.3z"
            />
          </clipPath>
        </defs>
      </svg>
      {styles}
      {/* <style jsx>{`
        .clipIt {
          border: red solid 1px;
        }
        .clipIt > span {
          border: blue solid 1px;
        }
      `}</style> */}
    </div>
  );
};

export default ImagePlug;

const AspectBox: React.FC<{ ratio?: ImagePlugProps["ratio"] }> = (props) => {
  const { children, ratio } = props;
  if (!ratio || ratio === "auto") {
    return <>{children}</>;
  }
  return (
    <div
      className={clsx("border-2 relative", {
        "aspect-w-3 aspect-h-2": ratio === "3:2",
        "aspect-w-5 aspect-h-9": ratio === "5:9",
        "aspect-w-16 aspect-h-9": ratio === "16:9",
        "aspect-w-1 aspect-h-1": ratio === "1:1",
      })}
    >
      {children}
    </div>
  );
};
