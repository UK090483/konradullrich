import React, { useState } from "react";

import clsx from "clsx";

import { linkQuery, LinkResult } from "@lib/Navigation/query";
import { imageMeta, ImageMetaResult } from "@lib/SanityImage/query";
import ImageGalleryPlugItem from "./ImageGalleryItem";
import ImageGalleryItem from "./ImageGalleryItem";
import { AppColor } from "types";
import Typo from "@components/Typography/Typography";
import GLImage from "@components/GlImage/GLImage";
import parseSanityImage from "@components/GlImage/utils/parseSanityImage";
import urlFor from "@lib/SanityService/sanity.imageBuilder";
import { useToggle, useWindowSize } from "react-use";
import GlImageList from "@components/GlImage/GlImageList";
import useMasks from "@components/GlImage/useMasks";

export const imageGalleryPlugQuery = `
_type == "imageGalleryPlug" => {
  ...,
  _type,
  _key,
  'items':items[]{..., 'image': image{${imageMeta}} ,'link':link{
    ${linkQuery()}
  }  },
  rows,
  rows_mobile,
  ratio,
}
`;

export interface ImageGalleryPlugItem {
  _type: "imageGalleryItem";
  title?: string;
  size?: "m" | "l";
  image?: ImageMetaResult;
  link?: LinkResult;
  contain?: boolean;
  bgColor: AppColor;
  _key: string;
}

export interface ImageGalleryPlugResult {
  _type: "imageGalleryPlug";
  name?: string;
  rows?: number;
  rows_mobile?: number;
  ratio?: "1:1" | "16:9" | "2:3" | "3:2";
  items: ImageGalleryPlugItem[];
}

const ImageGalleryPlug: React.FC<{ node: ImageGalleryPlugResult }> = (
  props
) => {
  const { items, rows = 4, rows_mobile = 2, ratio = "1:1" } = props.node;

  const { width, height } = useWindowSize();

  const parsedImages = parseSanityImage({
    images: items.map((i) => i.image),
    w: 500,
    h: 500,
  });

  const [fade, setFade] = useState(false);

  const getMask = useMasks({ mask: "random" });

  if (!items || items.length < 1) return <div>No Images</div>;
  return (
    <div>
      <GlImageList images={parsedImages} />
      <GLImage
        onMouseEnter={() => setFade(true)}
        onMouseLeave={() => setFade(false)}
        fade={fade}
        imageA={parsedImages[0]}
        imageB={parsedImages[1]}
        mask={getMask()}
      />
    </div>
  );
};

export default ImageGalleryPlug;
