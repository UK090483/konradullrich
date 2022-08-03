import React, { useRef, isValidElement, useCallback } from "react";

const useCashedChildren = () => {
  const _cash = useRef<null | React.ReactNode>(null);

  const clearCash = () => {
    _cash.current = null;
  };
  const cash = useCallback((children: React.ReactNode) => {
    _cash.current = children;
  }, []);
  const cashIfEmpty = useCallback((children: React.ReactNode) => {
    _cash.current = children;
  }, []);

  return {
    clearCash,
    cash,
    cashedKey: isValidElement(_cash.current) ? _cash.current.key : null,
    cashedChildren: isValidElement(_cash.current) ? _cash.current : null,
  };
};

export default useCashedChildren;
