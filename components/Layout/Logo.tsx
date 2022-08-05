import React, { HTMLAttributes } from "react";
import { useAppColor } from "@components/AppContext/AppContext";

export const Logo = () => {
  const { primary } = useAppColor();
  return (
    <div
      style={{ color: primary }}
      className="animate-fadeIn text-primary font-bold  flex items-center justify-center border-current rounded-full border-4 w-12 h-12 leading-3"
    >
      <span className=" translate-y-[1px] ">KU</span>
    </div>
  );
};
