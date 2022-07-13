import { useState, useMemo } from "react";
import { Subdivisions } from "../useMetronome";
import { Signature } from "./useTransport";

type useClicksProps = {
  signature: Signature;
  subdivisions: Subdivisions;
};
export const useClicks = (props: useClicksProps) => {
  const { signature, subdivisions } = props;
  const [active, setActive] = useState(0);
  const arr = useMemo(
    () =>
      Array.from({ length: signature[0] * subdivisions }, (v, index) => {
        return { sound: index % subdivisions === 0 ? 0 : 1, index };
      }),
    [signature, subdivisions]
  );
  return { clicks: arr, current: arr[active] };
};
