import { useEffect, useLayoutEffect } from "react";
import ParallaxController from "./classes/Controller";

const useParallax = () => {
  useEffect(() => {
    const controller = ParallaxController.init();

    return () => {
      controller.destroy();
    };
  });
};

export default useParallax;
