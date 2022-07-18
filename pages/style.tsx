// import SVG from "@lib/SVGPathBuilder/SVG";
import * as React from "react";

interface IStypeProps {}

const Style: React.FunctionComponent<IStypeProps> = (props) => {
  return (
    <div className=" w-screen   grid grid-cols-2">
      <div className=" w-full  bg-blue-500">
        <div className="aspect-w-16 aspect-h-12 bg-red">
          <div className=" w-full h-full"></div>
        </div>
      </div>
      <div className=" w-full bg-blue-500">
        <div className="aspect-w-16 aspect-h-12 bg-green-200">
          <div className=" w-full h-full"></div>
        </div>
      </div>
      {/* <SVG /> */}
    </div>
  );
};

export default Style;
