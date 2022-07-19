import { useAppColor, useAppContext } from "@components/AppContext/AppContext";
import AspectBox from "@components/AspectBox";

import { Section } from "@components/Section/Section";
import Typo from "@components/Typography/Typography";
import SanityImage from "@lib/SanityImage";

import React from "react";
import { HeroBlogResult } from "../HeroBlockQuery";

interface AutoHero extends HeroBlogResult {}

const AutoHero: React.FC = (props) => {
  const { data } = useAppContext();
  const { primary } = useAppColor();
  const title = data?.title;
  const subTitle = data?.subTitle;
  const image = data?.featuredImage;

  return (
    <Section
      width="full"
      className="relative text-center w-screen pt-28 text-white px-3 "
    >
      <div
        style={{ backgroundColor: primary }}
        className=" absolute inset-14 opacity-40  blur-3xl  -z-10"
      ></div>

      <div className=" max-w-lg mx-auto ">
        <Typo>{title}</Typo>
        <Typo className=" uppercase " variant="h3" as="h1">
          {subTitle}
        </Typo>
      </div>

      {image && (
        <AspectBox
          className={`relative w-full md:w-1/2 mx-auto max-w-2xl  shadow-2xl rounded-xl overflow-hidden `}
        >
          <SanityImage image={image} layout="fill" objectFit="cover" />
        </AspectBox>
      )}
    </Section>
  );
};

export default AutoHero;
