import { useState, useCallback } from "react";

import useSequence, { SequenceItem } from "./hooks/useSequence";
import { useSound } from "./hooks/useSound";
import useTransport from "./hooks/useTransport";

export type Subdivisions = 1 | 2 | 3 | 4 | 5 | 6 | 7;

const defaultSubdivisions: Subdivisions = 1;

type useMetronomeProps = {
  onClick: (e: any) => void;
};

const useMetronome = (props?: useMetronomeProps) => {
  const [subdivisions, _setSubdivisions] =
    useState<Subdivisions>(defaultSubdivisions);
  const [time, setTime] = useState<{
    bar: number;
    beat: number;
    sub: number;
    tick: number;
  }>({
    bar: 0,
    beat: 0,
    sub: 0,
    tick: -1,
  });

  const [volume, _setVolume] = useState(0.5);
  const [currentNote, setCurrentNote] = useState("");

  const play = useSound({
    volume,
    sounds: [
      { type: "osc", freq: 1000 },
      { type: "osc", freq: 2000 },
      { type: "osc", freq: 3000 },
    ],
  });

  const onStop = useCallback(() => {
    setTime({
      bar: 0,
      beat: 0,
      sub: 0,
      tick: -1,
    });
  }, []);

  const {
    start,
    stop,
    toggle,
    state,
    swing,
    setSwing,
    tempo,
    setTempo,
    signature,
    setSignature,
  } = useTransport({
    onStop,
    subdivisions,
  });

  const sequenceCallback = useCallback(
    (time, note: SequenceItem) => {
      setCurrentNote(note.key);
      play(time, note.isSub ? 0 : note.key === "00" ? 2 : 1);
    },
    [play]
  );

  const { sequence } = useSequence({
    callback: sequenceCallback,
    signature,
    subdivisions,
  });

  const setSubdivisions = (subdivisions: 1 | 2 | 3 | 4 | 5 | 6) => {
    _setSubdivisions(subdivisions);
  };

  const setVolume = (volume: number) => {
    _setVolume(volume);
  };

  return {
    state,
    start,
    stop,
    toggle,
    tempo,
    setTempo,
    swing,
    setSwing,
    subdivisions,
    setSubdivisions,
    volume,
    setVolume,
    time,
    signature,
    setSignature,
    currentNote,
    sequence,
  };
};

export default useMetronome;
