import Typo from "@components/Typography/Typography";
import React from "react";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-20 bg-grey-light ">
      <div className="flex items-center justify-between py-3 pl-24 text-white bg-red">
        <Typo space={false}> Kostenlose Beratung: 040 38 61 23 71</Typo>
      </div>
      {children}
    </div>
  );
};