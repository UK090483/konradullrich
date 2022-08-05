import React, { useMemo } from "react";
import clsx from "clsx";
import { AppColor } from "types";

import { SanityBlock } from "@lib/SanityPageBuilder/lib/RichText";
import RichText from "@components/RichText/RichText";
import { Section } from "@components/Section/Section";
import SanityImage from "@lib/SanityImage";
import { ImageMetaResult } from "@lib/SanityImage/query";
import { SectionResult } from "./sectionBlockQuery";

interface SectionBlockProps extends SectionResult {}

const SectionBlock: React.FC<SectionBlockProps> = (props) => {
  const {
    content,
    bottomSpace,
    topSpace,
    title,
    image,
    bgColor,
    type,
    imagePosition = "l",
    columns,
  } = props;
  const hasImage = image && image.url;
  const autoType = hasImage ? "l" : "s";
  const hasColumns = !!columns;

  const preparedContent = useMemo(
    () =>
      content &&
      hasColumns &&
      content.reduce(
        (acc, item) => {
          let currentIndex = acc.length - 1;
          if (item._type === "column") {
            currentIndex += 1;
          }
          const currentBlock = acc[currentIndex] || [];
          const currentBlockWithItem = [...currentBlock, item];
          const nextResult = [...acc];
          nextResult[currentIndex] = currentBlockWithItem;
          return nextResult;
        },
        [[]] as SanityBlock[][]
      ),
    [content, hasColumns]
  );

  if (!content) return null;

  return (
    <>
      {bgColor === "primary" && <Transition pos="top" />}
      <Section
        bg={bgColor}
        width={type || autoType}
        {...(title && { id: title })}
        className={clsx({
          "lg:grid  gap-12 ": hasColumns,
          "grid-cols-2": columns === 1,
          "grid-cols-3": columns === 2,
          "pt-5 md:pt-10": topSpace === "s",
          "pt-9 md:pt-20": topSpace === "m",
          "pt-12 md:pt-32": topSpace === "l",
          "pt-16 md:pt-44": topSpace === "xl",
          "pt-24 md:pt-60": topSpace === "xxl",
          "pb-5 md:pb-10": bottomSpace === "s",
          "pb-9 md:pb-20": bottomSpace === "m",
          "pb-16 md:pb-32": bottomSpace === "l",
          "pb-12 md:pb-44": bottomSpace === "xl",
          "pb-24 md:pb-60": bottomSpace === "xxl",
          "pb-0.5": !bottomSpace,
          "grid  grid-cols-1  lg:grid-cols-3 ": hasImage,
        })}
      >
        {hasImage ? (
          <WithImage place={imagePosition} image={image}>
            {hasColumns ? (
              <RichTextWithColumns content={preparedContent} />
            ) : (
              <RichText content={content} />
            )}
          </WithImage>
        ) : (
          <>
            {hasColumns ? (
              <RichTextWithColumns content={preparedContent} />
            ) : (
              <RichText content={content} />
            )}{" "}
          </>
        )}
      </Section>

      {bgColor === "primary" && <Transition pos="bottom" />}
      <div className="clear-both "></div>
    </>
  );
};

const WithImage: React.FC<{
  place: "l" | "r";
  image: ImageMetaResult;
}> = ({ children, place = "l", image }) => {
  const content = (
    <div
      className={clsx({
        "pr-0  lg:pr-12 col-span-2": place === "r",
        "pl-0  lg:pl-12 col-span-2": place === "l",
      })}
    >
      {children}
    </div>
  );
  return (
    <>
      {place === "r" && content}
      <div className="relative overflow-hidden aspect-w-1 aspect-h-1 ">
        <SanityImage image={image} objectFit="contain" alt="bla" />
      </div>
      {place === "l" && content}
    </>
  );
};

export default SectionBlock;

const RichTextWithColumns: React.FC<{ content?: SanityBlock[][] | false }> = ({
  content,
}) => {
  if (!content) return null;
  return (
    <>
      {content.map((i, index) => (
        <div key={index} className="">
          <RichText content={i} />
        </div>
      ))}
    </>
  );
};

type TransitionProps = {
  color?: AppColor;
  pos: "top" | "bottom";
};

const topD = "M1000 100H-2.14577e-05V1.66893e-06L1000 100Z";
const bottomD = "M0 0H1000V100L0 0Z";

const Transition: React.FC<TransitionProps> = ({ color = "primary", pos }) => {
  return (
    <div className="relative">
      <div
        className={clsx("absolute w-full ", {
          "transform -translate-y-12": pos === "top",
        })}
      >
        <svg
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          className={clsx(" fill-current h-12  w-full", {
            "text-white": color === "white",
            "text-primary": color === "primary",
            "text-secondary": color === "secondary",
            "text-gray-300": color === "grey",
          })}
        >
          <path d={pos === "top" ? topD : bottomD} />
        </svg>
      </div>
    </div>
  );
};
