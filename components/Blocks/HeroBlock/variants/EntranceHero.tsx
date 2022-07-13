import { Background } from "@components/Background";
import Typo from "@components/Typography/Typography";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";

const EntranceHero: React.FC = () => {
  return (
    <div
      data-testid="heroBlock"
      className="relative lg:flex-row  h-screen pt-20 min-h-[600px]"
    >
      {/* <Background className=" absolute inset-0 -z-10 " /> */}
      <div
        className={clsx(
          "flex flex-col justify-center items-center  -z-10 absolute inset-0"
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
            I build <Attributes /> things for the web.
          </Typo>
          <Typo className="max-w-xl ">
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products at Upstatement.
          </Typo>
        </div>
      </div>
    </div>
  );
};

export default EntranceHero;

const atr = ["fast", "reliable", "responsive", "reactive", "creative"];

const Attributes: React.FC = () => {
  const [active, setActive] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((i) => (i + 1) % atr.length);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (!ref) return;
  }, [active]);

  useTyping({ ref, text: atr[active] });

  return <span ref={ref} className=" text-primary"></span>;
};

type useTypingProps = {
  text: string;
  ref: React.MutableRefObject<HTMLSpanElement | null>;
};

const useTyping = ({ text, ref }: useTypingProps) => {
  useEffect(() => {
    if (!ref.current) return;

    const textNow = ref.current.innerText;

    if (textNow) {
      ref.current.innerText = "";
    }
    let timeout: NodeJS.Timeout | null;
    const type = () => {
      if (!ref.current) return;
      ref.current.innerText =
        ref.current.innerText + text.charAt(ref.current.innerText.length);
      timeout = setTimeout(() => {
        if (!ref.current) return;
        if (ref.current.innerText !== text) {
          type();
        }
      }, Math.random() * 200);
    };
    type();
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [text, ref]);
};
