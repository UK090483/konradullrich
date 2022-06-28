import { useEffect, useRef, useState } from "react";

function useElementSize<T extends Element>() {
  const ref = useRef<T>(null);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const getValues = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      setWidth(rect.width);
      setHeight(rect.height);
      setDone(true);
    };
    getValues();
    window.addEventListener("resize", getValues);
    return () => {
      window.removeEventListener("resize", getValues);
    };
  }, [ref]);

  return { ref, width, height, done };
}

export default useElementSize;
