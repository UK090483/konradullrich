import { useAppContext } from "@components/AppContext/AppContext";

import React from "react";

import { HeroBlogResult } from "./HeroBlockQuery";
import AutoHero from "./variants/AutoHero";
import EntranceHero from "./variants/EntranceHero";

interface HeroProps extends HeroBlogResult {}

const Hero: React.FC<HeroProps> = (props) => {
  const { data } = useAppContext();

  const isWorkPage =
    data?.pageType?._id === "0b44cf38-661d-437f-a875-9f6910906fb6";

  if (isWorkPage) {
    return <AutoHero />;
  }

  return <EntranceHero />;
};

export default Hero;
