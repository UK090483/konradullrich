import clsx from "clsx";
import React, { useRef, useState } from "react";

import {
  useFirstMountState,
  useIsomorphicLayoutEffect,
  usePrevious,
} from "react-use";
import useCashedChildren from "./useCahshedChildren";

export interface IPageTransitionWrapProps {
  id: string;
  duration?: number;
}

export const PageTransitionWrap: React.FC<IPageTransitionWrapProps> = (
  props
) => {
  const { children, duration = 2000 } = props;

  const { cash, cashedChildren, clearCash } = useCashedChildren();

  const isFirstRender = useFirstMountState();
  const currentKey = React.isValidElement(children) && children.key;

  const cashedChildrenKey = React.isValidElement(cashedChildren)
    ? cashedChildren.key
    : null;

  const [transition, setTransition] = useState<"init" | "in" | "out" | "done">(
    "init"
  );
  const [transIn, setTransIn] = useState<"init" | "running" | "done">("init");

  const _transition = cashedChildren && transIn !== "running" ? "out" : "init";

  useIsomorphicLayoutEffect(() => {
    if (!cashedChildren) {
      cash(children);
    }
  }, [children, cashedChildren]);

  useIsomorphicLayoutEffect(() => {
    let t: null | NodeJS.Timeout = null;

    if (_transition === "out") {
      console.log("handle transition Out");
      t = setTimeout(() => {
        console.log("handle transition In");
        clearCash();
        setTransIn("running");
      }, duration);
    }
  }, [_transition, duration]);

  useIsomorphicLayoutEffect(() => {
    let t: null | NodeJS.Timeout = null;
    if (transIn !== "running") return;
    t = setTimeout(() => {
      setTransIn("done");
    }, duration);

    return () => {
      t && clearTimeout(t);
    };
  }, [transIn]);

  console.log({
    transition,
    currentKey,
    cashedChildrenKey,
    _transition,
    transIn,
  });

  return (
    <div
      style={{
        transitionDuration: duration + "ms",
        opacity: transitionMap[_transition].opacity,
      }}
      className={clsx("transition-all ", {
        // "opacity-0": transition === "out",
        // "opacity-100": transition === "in",
        // "opacity-100": transition === "init",
      })}
    >
      {cashedChildren ? cashedChildren : children}
    </div>
  );
};

const transitionMap = {
  in: { opacity: 1 },
  out: { opacity: 0.5 },
  init: { opacity: 1 },
  done: { opacity: 1 },
};

export interface IPageTransitionItemProps {}
