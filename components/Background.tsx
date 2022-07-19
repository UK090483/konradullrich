import React, { useEffect, useRef, useState } from "react";
import {
  useInterval,
  useIsomorphicLayoutEffect,
  useWindowScroll,
  useWindowSize,
} from "react-use";
import { useAppColor } from "./AppContext/AppContext";

export interface IBackgroundProps {
  className?: string;
}

export function Background(props: IBackgroundProps) {
  const { className } = props;

  return (
    <div className={className}>
      <Blur />
      <Blur />
      <Blur />
      <Blur />
      <Blur />
      <Blur />
      <Blur />
    </div>
  );
}

const getRandomPosition = () => {
  return `translate3d(${Math.random() * 100}vw,${Math.random() * 100}vh,0)`;
};

type BlurProps = {
  duration?: number;
  rangeY?: number;
  rangeX?: number;
  size?: number;
  initPosition?: string;
};
const Blur: React.FC<BlurProps> = (props) => {
  const {
    duration = 10000,
    size = 20,
    initPosition = getRandomPosition(),
  } = props;
  const [position, setPosition] = useState("");
  const { primary } = useAppColor();

  useEffect(() => {
    setPosition(getRandomPosition());
  }, []);

  useInterval(() => {
    setPosition(getRandomPosition());
  }, duration + Math.random() * 1000);

  return (
    <>
      <div
        style={{
          transform: position || initPosition,
          transitionDuration: duration + "ms",
          transitionTimingFunction: "linear",
          width: size + "vw",
          height: size + "vw",
          ...(primary ? { backgroundColor: primary } : {}),
        }}
        className="absolute  opacity-50 transition-transform  right-0 left-0 w-80 h-80 bg-primary rounded-full blur-3xl "
      ></div>
    </>
  );
};
