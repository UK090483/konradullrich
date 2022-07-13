import { useMetronomeContext } from "@lib/Metronome/MetronomeContext";
import clsx from "clsx";
import * as React from "react";

export interface IBpmProps {}

function Subdevisions() {
  const { subdivisions, setSubdivisions } = useMetronomeContext();

  const arr = React.useMemo(
    () => Array.from({ length: 7 }, (v, k) => k + 1),
    []
  );
  return (
    <div className="relative w-fit text-2xl mx-auto group overflow-hidden  rounded-lg  min-h-[34px]    justify-center items-center ">
      <div
        className={clsx(
          " flex justify-center items-center absolute mx-auto left-1/2 -translate-x-1/2   w-8 h-8 border-4 border-current transition-transform group-hover:-translate-y-32"
        )}
      >
        {subdivisions}
      </div>
      <div className=" mx-auto block translate-y-32 group-hover:-translate-y-0  transition-transform ">
        {arr.map((v, index) => (
          <button
            // @ts-ignore
            onClick={() => setSubdivisions(v)}
            className={clsx(
              "  leading-none text-base  w-8 h-8 border-y-4 border-current",
              {
                "border-l-4 rounded-l-lg": index === 0,
                "border-r-4 rounded-r-lg": index === arr.length - 1,
                " font-bold text-2xl ": subdivisions === v,
              }
            )}
            key={v}
          >
            {v}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Subdevisions;
