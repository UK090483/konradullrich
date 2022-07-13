import { useEffect, useRef } from "react";
import { ToneLoop } from "../ToneLib";
import { Time } from "tone/Tone/core/type/Units";

type useLoopProps = {
  subdivisions: Time;
  callback: (time: number) => void;
};
const useLoop = (props: useLoopProps) => {
  const { subdivisions, callback } = props;

  const loop = useRef<ToneLoop | null>(null);

  useEffect(() => {
    if (!loop.current) {
      loop.current = new ToneLoop(callback, "4n").start(0);
    }
    loop.current.callback = callback;
    loop.current.interval = subdivisions;
  }, [callback, subdivisions]);
};

export default useLoop;
