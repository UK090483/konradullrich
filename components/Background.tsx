import React, { useEffect, useState } from "react";
import { useInterval } from "react-use";

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
};
const Blur: React.FC<BlurProps> = (props) => {
  const { duration = 10000, size = 20 } = props;
  const [position, setPosition] = useState(getRandomPosition());

  useEffect(() => {
    setPosition(getRandomPosition());
  }, []);

  useInterval(() => {
    setPosition(getRandomPosition());
  }, duration + Math.random() * 1000);

  return (
    <div
      style={{
        transform: position,
        transitionDuration: duration + "ms",
        transitionTimingFunction: "linear",
        width: size + "vw",
        height: size + "vw",
      }}
      className="absolute  opacity-50 transition-all right-0 left-0 w-80 h-80 bg-primary rounded-full blur-3xl "
    ></div>
  );
};
