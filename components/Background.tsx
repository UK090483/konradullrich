import React from "react";

import { useAppColor } from "./AppContext/AppContext";

export interface IBackgroundProps {
  className?: string;
}

const PATH_1 =
  "M4 5c34-2 49-8 88 0 22 9-79 15-86 19-7 3-8 6 0 26s23 32 30 24c8-9 30-28 43-23 13 6 25 16 10 28C75 90 23 94 6 94c-17-1 108-47 86-61-21-13-43 8-59 1C17 28-5 4 4 5Z";
const PATH_2 =
  "M84 93c-6 12-78 3-73-10 4-14 45-32 65-39 16-5 34-4-19 37C5 122 2 57 7 20c0-15 16-35 70 1 69 45-97 67-61 20C46 3 90 81 84 93Z";
const PATH_3 =
  "m31 49 54-34c32-14-17 70 1 76 5 4 15 4 11-25S39 14 13 7C7 4-3 8 9 51c11 44 32 26 41 12 15-21 37-84-30-35-64 47 76 86 37 63C5 64 28 52 27 53l4-4Z";
const PATH_4 =
  "M77 16C55 7 10-4 13 22c3 32-3 45 7 48 8 2 20-8 24-13 8-9 16-27-16-19-40 9-18 59-6 58 10-1 27-19 35-28C74 46 94 6 38 20s7 53 46 71c8 1 20-5 8-41-13-36-19-4-21 17 0 10 2 30 9 30 6 0 29-70-3-81Z";
const PATH_5 =
  "M95 7C61 5 46-1 7 7c-22 9 79 15 86 19 7 3 8 6 0 26S70 84 63 76c-7-9-30-28-43-23C8 59-5 69 10 81c14 11 66 15 83 15 18-1-108-47-86-61 21-13 43 8 59 1 16-6 38-30 29-29Z";
const PATH_6 =
  "M16 93c6 12 78 3 73-10-4-14-45-32-65-39-16-5-34-4 19 37 52 41 55-24 50-61 0-15-16-35-70 1-69 45 97 67 61 20C54 3 10 81 16 93Z";
const PATH_7 =
  "M71 49 16 15c-32-14 18 70 0 76-6 4-16 4-12-25C9 37 62 14 88 7c7-3 16 1 5 44-12 44-33 26-42 12-14-21-36-84 30-35 64 47-76 86-36 63 51-27 28-39 30-38l-4-4Z";

export function Background(props: IBackgroundProps) {
  const { className } = props;

  const { primary } = useAppColor();

  return (
    <div className={className}>
      <svg
        style={{ color: primary }}
        className=" transition-colors duration-1000  w-full h-full text-primary fill-current  blur-3xl opacity-60 "
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <Bubble path={PATH_1} />
        <Bubble path={PATH_2} />
        <Bubble path={PATH_3} />
        <Bubble path={PATH_4} />
        <Bubble path={PATH_5} time={200} />
        <Bubble path={PATH_6} time={200} />
        <Bubble path={PATH_7} time={200} />
      </svg>
    </div>
  );
}

const Bubble = (props: {
  path: string;
  time?: number;
  direction?: "reverse" | "normal";
}) => {
  const { path, time = 120, direction = "normal" } = props;
  return (
    <>
      {/* <path fill="none" stroke="lightgrey" d={path} /> */}
      <circle r="10%">
        <animateMotion dur={`${time}s`} repeatCount="indefinite" path={path} />
      </circle>
    </>
  );
};
