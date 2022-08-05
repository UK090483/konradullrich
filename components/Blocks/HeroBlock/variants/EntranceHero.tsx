import clsx from "clsx";
import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Typo from "@components/Typography/Typography";

const EntranceHero: React.FC = () => {
  return (
    <div
      data-testid="heroBlock"
      className="relative lg:flex-row  h-screen pt-20 min-h-[600px] "
    >
      <div
        className={clsx(
          "flex flex-col justify-center items-center  -z-10 absolute inset-0 "
        )}
      >
        <div className=" max-w-4xl px-5 ">
          <Typo space={false} className={"text-primary pb-4 pl-1"}>
            Hi, my name is
          </Typo>

          <Typo variant="h1" space={false} className={"text-text-light pb-4 "}>
            Konrad Ullrich
          </Typo>

          <Typo variant="h3" space={false} className="pb-4 ">
            I build <Attributes />
            things for the web.
          </Typo>
          <Typo className="max-w-xl ">
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences.
          </Typo>
        </div>
      </div>
    </div>
  );
};

export default EntranceHero;

const atr = ["fast", "reliable", "responsive", "reactive", "creative"];

const Attributes: React.FC = () => {
  return (
    <span className=" text-primary">
      <ReactTypingEffect
        typingDelay={100}
        eraseDelay={1000}
        eraseSpeed={100}
        text={atr}
      />
    </span>
  );
};
