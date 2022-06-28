import React, { useState } from "react";
import useElementSize from "@hooks/useElementSize";
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

import { IPad, IPhone6, MacbookPro } from "react-device-mockups";
import "html5-device-mockups/dist/device-mockups.min.css";

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

  const { ref, width, height } = useElementSize<HTMLDivElement>();

  const parsedImages = parseSanityImage({
    images: items.map((i) => i.image),
    w: width,
    h: height,
  });

  const [fade, setFade] = useState(false);

  const getMask = useMasks({ mask: "random" });

  if (!items || items.length < 1) return <div>No Images</div>;
  return (
    <div className="h-screen " ref={ref}>
      <GlImageList width={width} height={height} images={parsedImages} />
      <GLImage
        height={height}
        width={width}
        onMouseEnter={() => setFade(true)}
        onMouseLeave={() => setFade(false)}
        fade={fade}
        imageA={parsedImages[0]}
        imageB={parsedImages[1]}
        mask={getMask()}
      />
      <div>
        <IPad
          width={600}
          orientation="portrait"
          color="white"
          buttonProps={{
            onClick: () => alert("Home Button Clicked!"),
          }}
          screenProps={{ onMouseEnter: () => setFade(true) }}
        >
          <GLImage
            height={632.78}
            width={475.8}
            onMouseEnter={() => setFade(true)}
            onMouseLeave={() => setFade(false)}
            fade={fade}
            imageA={parsedImages[0]}
            imageB={parsedImages[1]}
            mask={getMask()}
          />
          {/* <iframe
            title="showcase"
            src="https://www.perspektivregion.eu/"
            style={{
              width: "100%",
              height: "100%",
              margin: 0,
              backgroundColor: "white",
            }}
          /> */}
        </IPad>
        <IPhone6
          width={300}
          orientation="portrait"
          color="white"
          buttonProps={{
            onClick: () => alert("Home Button Clicked!"),
          }}
        >
          <iframe
            title="showcase"
            src="https://www.perspektivregion.eu/erinnerungsparlament"
            style={{
              width: "100%",
              height: "100%",
              margin: 0,
              backgroundColor: "white",
            }}
          />
        </IPhone6>

        <div className="scale-50">
          <MacbookPro
            width={2500}
            buttonProps={{
              onClick: () => alert("Home Button Clicked!"),
            }}
          >
            <embed
              id="embed"
              onLoad={(e) => {
                console.log(e.currentTarget);

                const body =
                  e.currentTarget.ownerDocument.querySelector("html");

                console.log(body);

                body?.scrollTo({ top: 500 });
              }}
              title="showcase"
              src="https://www.perspektivregion.eu/erinnerungsparlament"
              style={{
                width: "100%",
                height: "100%",
                margin: 0,
                backgroundColor: "white",
              }}
            />
          </MacbookPro>
        </div>
      </div>
    </div>
  );
};

export default ImageGalleryPlug;
