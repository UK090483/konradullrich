import { countBy } from "lodash";
import { useEffect, useState } from "react";

type useTimeOutProps = {
  ms: number;
  cb: () => boolean;
};
const useTimeOut = (props: useTimeOutProps) => {
  const { ms, cb } = props;
  const [timeOut, setTo] = useState(0);
  const [stopped, setStopped] = useState(false);

  useEffect(() => {
    if (stopped) return;
    const timeout = setTimeout(() => {
      if (cb()) {
        setTo((i) => ++i);
      }
    }, ms);

    return () => {
      clearTimeout(timeout);
    };
  }, [timeOut, stopped, cb, ms]);

  return {
    stop: () => {
      setStopped(true);
    },
    start: () => {
      stopped && setStopped(false);
      setTo((i) => ++i);
    },
  };
};

export default useTimeOut;
