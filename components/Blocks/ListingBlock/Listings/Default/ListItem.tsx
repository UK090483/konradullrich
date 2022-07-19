import React from "react";

import Typo from "@components/Typography";

import { Link } from "@components/Link";

import SanityImage from "@lib/SanityImage";
import Button from "@components/Button/Button";
import { ListItemResult } from "../../listingBlockQuery";
// import GlImageList from "@components/GlImage/GlImageList";
// import parseSanityImage from "@components/GlImage/utils/parseSanityImage";
import useElementSize from "@hooks/useElementSize";
import AspectBox from "@components/AspectBox";

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

  const parsedFeaturedImages = null;

  return (
    <li ref={ref} className="list-none w-full max-w-2xl   lg:max-w-7xl mx-auto">
      <Link
        className={`grid lg:grid-cols-2 mx-auto w-full gap-8 mb-12 lg:mb-24 px-3 ${className}`}
        href={`/${slug}` || "/"}
      >
        {!parsedFeaturedImages && featuredImage && (
          <AspectBox
            className={`rounded-2xl overflow-hidden animator shadow-2xl ${
              position === "left" ? "" : "lg:order-2"
            }`}
          >
            <SanityImage
              id="transition-Item"
              image={featuredImage}
              objectFit="cover"
            />
          </AspectBox>
        )}

        {/* {parsedFeaturedImages && (
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
        )} */}
        <div>
          <Typo variant="subheading1">
            {subTitle ? subTitle.toUpperCase() : slug?.toUpperCase()}
          </Typo>
          <Typo as={"h2"} variant="h3" className="text-text-light">
            {title}
          </Typo>
          <Typo className="w-full  whitespace-pre-line  ">{description}</Typo>
          <Button tabIndex={-1}>Read More</Button>
        </div>
      </Link>
    </li>
  );
};
