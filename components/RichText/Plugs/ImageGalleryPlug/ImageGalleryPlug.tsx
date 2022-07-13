import React, { useEffect, useRef, useState } from "react";
import useElementSize from "@hooks/useElementSize";
import clsx from "clsx";

import { linkQuery, LinkResult } from "@lib/Navigation/query";
import { imageMeta, ImageMetaResult } from "@lib/SanityImage/query";
import ImageGalleryPlugItem from "./variants/Grid/ImageGalleryItem";
import ImageGalleryItem from "./variants/Grid/ImageGalleryItem";
import { AppColor } from "types";
import Typo from "@components/Typography/Typography";
import GLImage from "@components/GlImage/GLImage";
import parseSanityImage from "@components/GlImage/utils/parseSanityImage";
import urlFor from "@lib/SanityService/sanity.imageBuilder";
import { useToggle, useWindowSize } from "react-use";
import GlImageList from "@components/GlImage/GlImageList";
import useMasks from "@components/GlImage/useMasks";

import { IPad, IPhone6, MacbookPro } from "react-device-mockups";
import "html5-device-mockups/dist/device-mockups.min.css";
import SanityImage from "@lib/SanityImage";
import FramePreview from "./variants/FramePreview";
import ImageGalleryGrid from "./variants/Grid/Grid";
import Marquee from "./variants/Marquee/Marquee";

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
variant,
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
  variant?: string;
}

const ImageGalleryPlug: React.FC<{ node: ImageGalleryPlugResult }> = (
  props
) => {
  const {
    items,

    variant,
  } = props.node;

  if (!items || items.length < 1) return <div>No Images</div>;

  if (variant === "framePrev") {
    return <FramePreview {...props.node} />;
  }

  if (variant === "marquee") {
    return <Marquee {...props.node} />;
  }

  return <ImageGalleryGrid {...props.node} />;
};

export default ImageGalleryPlug;
