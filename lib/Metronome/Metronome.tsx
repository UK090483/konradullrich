import * as React from "react";
import Signature from "./Components/Signature";
import { MetronomeContextProvider } from "./MetronomeContext";
import MainButton from "./Ui/Button/MainButton";
import { Bpm } from "./Ui/Inputs/Bpm";
import Range from "./Ui/Inputs/Range";
import Subdevisions from "./Ui/Inputs/Subdevisions";
import Lights from "./Ui/Lights/Lights";

interface IMetronomeProps {}

const Metronome: React.FunctionComponent<IMetronomeProps> = (props) => {
  return (
    <MetronomeContextProvider>
      {({ swing, setSwing, volume, setVolume }) => {
        return (
          <div className="w-[500px] h-[500px]  shadow-2xl rounded-xl flex flex-col gap-4 justify-between  border-4 border-current p-16 ">
            <Lights />
            <Signature />

            <div className=" flex flex-col">
              <Range value={swing} min={0} max={1} onChange={setSwing} />
              <Range value={volume} min={0} max={1} onChange={setVolume} />
            </div>
            <Subdevisions />
            <Bpm />
            <MainButton />
          </div>
        );
      }}
    </MetronomeContextProvider>
  );
};

export default Metronome;
