import React, { useEffect } from "react";

const easingFunctions = {
  // no easing, no acceleration
  linear: function (t: number) {
    return t;
  },
  // accelerating from zero velocity
  easeInQuad: function (t: number) {
    return t * t;
  },
  // decelerating to zero velocity
  easeOutQuad: function (t: number) {
    return t * (2 - t);
  },
  // acceleration until halfway, then deceleration
  easeInOutQuad: function (t: number) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },
  // accelerating from zero velocity
  easeInCubic: function (t: number) {
    return t * t * t;
  },
  // decelerating to zero velocity
  easeOutCubic: function (t: number) {
    return --t * t * t + 1;
  },
  // acceleration until halfway, then deceleration
  easeInOutCubic: function (t: number) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  },
  // accelerating from zero velocity
  easeInQuart: function (t: number) {
    return t * t * t * t;
  },
  // decelerating to zero velocity
  easeOutQuart: function (t: number) {
    return 1 - --t * t * t * t;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuart: function (t: number) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  },
  // accelerating from zero velocity
  easeInQuint: function (t: number) {
    return t * t * t * t * t;
  },
  // decelerating to zero velocity
  easeOutQuint: function (t: number) {
    return 1 + --t * t * t * t * t;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuint: function (t: number) {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
  },
};
const clamp = (num: number, min: number, max: number) =>
  Math.min(Math.max(num, min), max);

type useEaseProps = {
  ease?: keyof typeof easingFunctions;
  duration?: number;
  updateRate?: number;
  active?: boolean;
  onEaseDone?: (active: boolean) => void;
};

const useEase = ({
  ease = "linear",
  duration = 500,
  updateRate = 20,
  active = false,
  onEaseDone = () => {},
}: useEaseProps) => {
  const [progress, setProgress] = React.useState(0);

  const amount = React.useMemo(
    () => 1 / (duration / updateRate),
    [duration, updateRate]
  );

  useEffect(() => {
    let timeOut: NodeJS.Timeout | null;
    const should = active ? 1 : 0;

    const needsUpdate = () => {
      return progress !== should;
    };

    function update() {
      const nextVal = clamp(
        Number((active ? progress + amount : progress - amount).toFixed(2)),
        0,
        1
      );
      setProgress(nextVal);
      if (nextVal === 0 || nextVal === 1) {
        onEaseDone(active);
      }
    }
    if (needsUpdate()) {
      timeOut = setTimeout(() => {
        update();
      }, updateRate);
    }
    return () => {
      timeOut && clearTimeout(timeOut);
    };
  }, [active, progress, duration, updateRate, amount, onEaseDone]);

  const value = easingFunctions[ease](progress);

  return value;
};

export default useEase;
