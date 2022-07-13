import { useMetronomeContext } from "@lib/Metronome/MetronomeContext";
import React, { useState } from "react";

export function Bpm() {
  const { tempo, setTempo } = useMetronomeContext();
  const [active, setActive] = useState(false);
  return (
    <div className="grid grid-cols-3 w-full text-2xl mx-auto border-4 border-current rounded-lg ">
      <button
        className="  h-12 border-r-4 border-current"
        onClick={() => setTempo(tempo - 1)}
      >
        -
      </button>
      <div
        onClick={() => setActive(true)}
        className="text-3xl font-bold mx-4 h-12 flex items-center justify-center"
      >
        {tempo}
      </div>

      <button
        className="  h-12 border-l-4 border-current"
        onClick={() => setTempo(tempo + 1)}
      >
        +
      </button>
    </div>
  );
}
