import clsx from "clsx";
import * as React from "react";

interface ILightProps {
  blink: boolean;
  size?: "s" | "m" | "l";
}

const Light: React.FunctionComponent<ILightProps> = (props) => {
  const { blink, size = "l" } = props;
  return (
    <div
      style={{ transitionDuration: "0.05s" }}
      className={clsx(` border-2  rounded-full transition-all  `, {
        "bg-red border-red scale-150 ": blink,
        "border-gray-300 ": !blink,
        " w-8 h-8": size === "l",
        " w-4 h-4": size === "m",
        " w-2 h-2": size === "s",
      })}
    >
      {" "}
    </div>
  );
};

export default Light;
