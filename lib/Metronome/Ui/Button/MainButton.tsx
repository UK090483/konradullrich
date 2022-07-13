import { useMetronomeContext } from "@lib/Metronome/MetronomeContext";
import clsx from "clsx";
import * as React from "react";

interface IMainButtonProps {}

const pathPlay = "M300 300 L700 300  L700 700  L300 700  Z";
const pathStop = "M350 250 L750 500  L750 500  L350 750  Z";

const MainButton: React.FunctionComponent<IMainButtonProps> = (props) => {
  const { toggle, state } = useMetronomeContext();

  return (
    <button
      className={clsx(
        " mx-auto w-20 h-20 border-4 border-current rounded-full"
      )}
      onClick={toggle}
    >
      <svg
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
        className=" fill-current "
      >
        <path
          style={{ transition: "all 0.2s" }}
          d={state === "start" ? pathPlay : pathStop}
        />
      </svg>
    </button>
  );
};

export default MainButton;
