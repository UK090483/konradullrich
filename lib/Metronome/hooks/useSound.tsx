import * as React from "react";
import { ToneSynth, ToneAmplitudeEnvelope } from "../ToneLib";

type OscillatorSound = { type: "osc"; freq: number };
type Sound = OscillatorSound;
export interface IUseSoundProps {
  sounds: Sound[];
  volume: number;
}

export function useSound(props: IUseSoundProps) {
  const { sounds, volume } = props;

  const soundList = React.useRef<ToneSynth[]>([]);
  React.useEffect(() => {
    console.log("init sounds");

    soundList.current = sounds.map((s) => {
      const o = new ToneSynth().toDestination();

      o.frequency.value = s.freq;
      return o;
    });
  }, []);

  React.useEffect(() => {
    soundList.current.forEach((osc) => {
      osc.volume.value = volume * 40 - 30;
    });
  }, [volume]);

  const play = React.useCallback(
    (time: number, soundIndex: number) => {
      if (soundIndex > sounds.length) return;
      const sound = soundList.current[soundIndex];
      const freq = sounds[soundIndex].freq;
      if (!sound) return;
      sound.envelope.release = 0.001;
      sound.envelope.attack = 0.00001;
      sound.triggerAttackRelease(freq - 100, 0.01, time);
    },
    [sounds]
  );

  return play;
}
