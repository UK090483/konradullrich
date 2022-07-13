import { useMetronomeContext } from "@lib/Metronome/MetronomeContext";
import React, { useMemo } from "react";
import Light from "./Light";

interface ILightsProps {}

const Lights: React.FunctionComponent<ILightsProps> = (props) => {
  const { sequence, currentNote } = useMetronomeContext();

  const preparedSequence = useMemo(() => sequence.flat(2), [sequence]);

  return (
    <div className="flex items-center justify-center gap-4 ">
      {preparedSequence.map((click, index) => {
        return (
          <Light
            size={click.isSub ? "s" : "m"}
            key={index}
            blink={currentNote === click.key}
          />
        );
      })}
    </div>
  );
};

export default Lights;
