import { useAppContext } from "@components/AppContext/AppContext";

import { Section } from "@components/Section/Section";
import Typo from "@components/Typography/Typography";
import SanityImage from "@lib/SanityImage";

import React from "react";
import { HeroBlogResult } from "../HeroBlockQuery";

interface AutoHero extends HeroBlogResult {}

const AutoHero: React.FC = (props) => {
  const { data } = useAppContext();

  const title = data?.title;
  const subTitle = data?.subTitle;
  const image = data?.featuredImage;
  const colors = data?.autoColors;

  const primaryColor = data?.primaryColor || colors?.vibrant.background;
  const secondaryColor = data?.secondaryColor || colors?.vibrant.foreground;

  return (
    <Section
      width="full"
      style={{ backgroundColor: primaryColor }}
      className="relative text-center w-screen bg-slate-600 pt-28 text-white border-2 border-primary  border-t-0"
    >
      <div className=" max-w-lg mx-auto">
        <Typo>{title}</Typo>
        <Typo className=" uppercase " variant="h2" as="h1">
          {subTitle}
        </Typo>
      </div>

      {image && (
        <div
          className={` relative w-full md:w-1/2 mx-auto  h-[500px] translate-y-6 md:translate-y-20 shadow-2xl rounded-xl overflow-hidden `}
        >
          <SanityImage image={image} layout="fill" objectFit="cover" />
        </div>
      )}
    </Section>
  );
};

export default AutoHero;
