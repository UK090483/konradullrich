import { useEffect, useState } from "react";
import { ToneTransport, toneStart } from "../ToneLib";
import { Subdivisions } from "../useMetronome";

type useTransportProps = {
  onStart?: () => void;
  onStop?: () => void;
  subdivisions: Subdivisions;
};

export type Signature = [number, number];

const useTransport = (props?: useTransportProps) => {
  const { onStop, onStart, subdivisions } = { ...props };

  const [state, setState] = useState<"start" | "stop">("stop");
  const [signature, setSignature] = useState<Signature>([4, 4]);
  const [swing, _setSwing] = useState(0);
  const [tempo, _setTempo] = useState(60);

  useEffect(() => {
    console.log("init transport");

    ToneTransport.on("start", () => {
      setState("start");
      onStart && onStart();
    });
    ToneTransport.on("stop", () => {
      setState("stop");
      onStop && onStop();
    });
    ToneTransport.bpm.value = tempo;
  }, [onStart, onStop]);

  const start = () => {
    toneStart();
    ToneTransport.start();
  };
  const stop = () => {
    ToneTransport.stop();
  };
  const toggle = () => {
    state === "start" ? stop() : start();
  };

  const setTempo = (tempo: number) => {
    _setTempo(tempo);

    ToneTransport.bpm.rampTo(tempo, 0.01);
  };
  const setSwing = (swing: number) => {
    _setSwing(swing);
    ToneTransport.swing = swing;
  };
  useEffect(() => {
    ToneTransport.timeSignature = signature;
  }, [signature]);

  return {
    start,
    stop,
    toggle,
    state,
    setTempo,
    tempo,
    setSwing,
    swing,
    signature,
    setSignature,
  };
};

export default useTransport;
