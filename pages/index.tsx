import Typo from "@components/Typography/Typography";
import UnderConstruction from "@components/UnderConstruction";
import * as React from "react";

interface IIndexPageProps {}

const IndexPage: React.FunctionComponent<IIndexPageProps> = (props) => {
  return (
    <div className=" bg-blue-300  px-5">
      <div className=" animate-fadeIn w-full h-screen flex justify-center  items-center flex-col">
        <UnderConstruction className=" w-1/2  stroke-white" />
        <Typo as="h1" variant="h1" className="text-center text-white">
          Under Construction
        </Typo>
      </div>
    </div>
  );
};

export default IndexPage;
