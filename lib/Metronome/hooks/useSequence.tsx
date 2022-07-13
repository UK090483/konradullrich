import { useEffect, useRef, useMemo } from "react";
import { ToneSequence } from "../ToneLib";
import { Subdivisions } from "../useMetronome";
import { Signature } from "./useTransport";

export type SequenceItem = {
  beat: number;
  subdivision: number;
  key: string;
  isSub: boolean;
};
type Sequence = (SequenceItem | SequenceItem[])[];

const useSequence = (props: {
  callback: (time: number, note: SequenceItem) => void;
  signature: Signature;
  subdivisions: Subdivisions;
}) => {
  const { callback, signature, subdivisions } = props;

  const seq = useRef<ToneSequence>();

  const preparedSequence: Sequence = useMemo(() => {
    return Array.from({ length: signature[0] }, (v, Beat) => {
      return subdivisions > 1
        ? Array.from({ length: subdivisions }, (v, subdivision) => {
            return {
              beat: Beat,
              key: Beat + "" + subdivision,
              subdivision: subdivision,
              isSub: !!subdivision,
            };
          })
        : {
            beat: Beat,
            key: Beat + "0",
            subdivision: 0,
            isSub: false,
          };
    });
  }, [subdivisions, signature]);

  useEffect(() => {
    seq.current?.dispose();
    //@ts-ignore
    seq.current = new ToneSequence(callback, preparedSequence, "4n").start(0);
  }, [callback, preparedSequence]);

  return { sequence: preparedSequence };
};

export default useSequence;
