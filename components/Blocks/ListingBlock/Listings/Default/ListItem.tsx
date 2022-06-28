import React from "react";

import Typo from "@components/Typography";

import { Link } from "@components/Link";

import SanityImage from "@lib/SanityImage";
import Button from "@components/Button/Button";
import { ListItemResult } from "../../listingBlockQuery";
import GlImageList from "@components/GlImage/GlImageList";
import parseSanityImage from "@components/GlImage/utils/parseSanityImage";
import useElementSize from "@hooks/useElementSize";

interface ListItemProps extends ListItemResult {
  className?: string;
  position?: "left" | "right";
}

export const ListItem: React.FC<ListItemProps> = (props) => {
  const {
    slug,
    title,
    description,
    featuredImages,
    className,
    position = "left",
    featuredImage,
    subTitle,
  } = props;

  const { ref, width } = useElementSize<HTMLLIElement>();
  // const parsedFeaturedImages =
  //   featuredImages &&
  //   parseSanityImage({ images: featuredImages, w: width * 2, h: width * 2 });

  const parsedFeaturedImages =
    featuredImages &&
    (featuredImages.filter((i) => !!i).map((i) => i?.url) as string[]);

  return (
    <li ref={ref} className="list-none  w-full">
      <Link
        className={`flex flex-wrap md:flex-nowrap mx-auto w-full  px-20 ${className}`}
        href={`/${slug}` || "/"}
      >
        {!parsedFeaturedImages && featuredImage && (
          <div
            className={`relative w-full    ${
              position === "left" ? "" : "md:order-2"
            }`}
          >
            <SanityImage
              width={width / 2}
              height={width / 2}
              image={featuredImage}
              objectFit="contain"
            />
          </div>
        )}

        {parsedFeaturedImages && (
          <div
            className={`relative     ${
              position === "left" ? "" : "md:order-2"
            }`}
          >
            <GlImageList
              className="overflow-hidden rounded-3xl"
              duration={600}
              height={width / 3}
              width={width / 3}
              images={parsedFeaturedImages}
            />
          </div>
        )}
        <div className={`p-8 w-full`}>
          <Typo space={false} className=" pb-3 text-primary">
            {subTitle ? subTitle.toUpperCase() : slug?.toUpperCase()}
          </Typo>
          <Typo as={"h2"} variant="h2" className="text-text-light">
            {title}
          </Typo>
          <Typo className="w-full overflow-hidden whitespace-pre-line mb-4 ">
            {description}
          </Typo>
          <Button tabIndex={-1}>Mehr erfahren</Button>
        </div>
      </Link>
    </li>
  );
};
