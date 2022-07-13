import Metronome from "@lib/Metronome/Metronome";
import React from "react";

interface IPageProps {}

const Page: React.FunctionComponent<IPageProps> = (props) => {
  return (
    <div className="w-screen h-screen flex items-center justify-center ">
      <Metronome />
    </div>
  );
};

export default Page;
