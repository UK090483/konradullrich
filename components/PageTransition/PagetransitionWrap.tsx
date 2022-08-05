import clsx from "clsx";
import React, { useRef, useState } from "react";
import { useIsomorphicLayoutEffect, usePrevious } from "react-use";

export interface IPageTransitionWrapProps {
  id: string;
  duration?: number;
}

export const PageTransitionWrap: React.FC<IPageTransitionWrapProps> = (
  props
) => {
  const { children, id, duration = 500 } = props;

  const oldId = useRef<string | null>(null);
  const isFirstRender = useRef<boolean>(true);

  const [activeComponent, setActiveComponent] =
    useState<React.ReactNode | null>(null);
  const [transition, setTransition] = useState<"init" | "in" | "out">("init");

  useIsomorphicLayoutEffect(() => {
    if (isFirstRender.current && React.isValidElement(children)) {
      setActiveComponent(React.cloneElement(children));
      isFirstRender.current = false;
      oldId.current = id;
      return;
    }

    let t: null | NodeJS.Timeout = null;
    if (id !== oldId.current && React.isValidElement(children)) {
      setTransition("out");
      t = setTimeout(() => {
        setActiveComponent(React.cloneElement(children));
        window.scrollTo({ top: 0 });
        setTransition("in");
      }, duration);
      oldId.current = id;
    }
    return () => {
      t && clearTimeout(t);
    };
  }, [children, duration, id]);

  useIsomorphicLayoutEffect(() => {
    let t: null | NodeJS.Timeout = null;
    if (transition !== "in") return;
    t = setTimeout(() => {
      setTransition("init");
    }, duration);

    return () => {
      t && clearTimeout(t);
    };
  }, [transition, duration]);

  return (
    <div
      style={{
        transitionDuration: duration + "ms",
        transformOrigin: "center",
        opacity: transitionMap[transition].opacity,
      }}
      className={clsx("transition-all")}
    >
      {activeComponent}
    </div>
  );
};

const transitionMap = {
  in: { transform: "scale(0) translate3d(-1vw,-1vh,0)", opacity: 1 },
  out: { transform: "scale(100) translate3d(1vw,1vh,0)", opacity: 0 },
  init: { transform: "scale(0) translate3d(-1vw,-1vh,0)", opacity: 1 },
};

export interface IPageTransitionItemProps {}
