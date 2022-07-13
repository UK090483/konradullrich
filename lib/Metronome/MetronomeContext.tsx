import React, { useContext } from "react";
import useMetronome from "./useMetronome";

type MetronomeApi = ReturnType<typeof useMetronome>;

interface IMetronomeState extends MetronomeApi {}

const defaultState: IMetronomeState = {
  state: "stop",
  start: () => {},
  stop: () => {},
  toggle: () => {},
  tempo: 120,
  setTempo: () => {},
  swing: 0,
  setSwing: () => {},
  subdivisions: 1,
  setSubdivisions: () => {},
  volume: 0.5,
  setVolume: () => {},
  time: { bar: 0, beat: 0, sub: 0, tick: 0 },
  signature: [4, 4],
  setSignature: () => {},
  currentNote: "",
  sequence: [],
};

const MetronomeContext = React.createContext(defaultState);

interface MetronomeContextProviderProps {
  children?: React.ReactNode | ((props: IMetronomeState) => React.ReactNode);
}

export const MetronomeContextProvider = (
  props: MetronomeContextProviderProps
) => {
  const { children, ...rest } = props;
  const metronomeApi = useMetronome();

  return (
    <MetronomeContext.Provider value={{ ...metronomeApi, ...rest }}>
      {typeof children === "function" ? children(metronomeApi) : children}
    </MetronomeContext.Provider>
  );
};

export const useMetronomeContext = () => {
  return useContext(MetronomeContext);
};
