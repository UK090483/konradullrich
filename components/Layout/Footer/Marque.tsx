import Image from "next/image";
import * as React from "react";

interface IMarqueProps {}

const images = [
  "bubble.png",
  "denmark.png",
  "german.png",
  "passport.png",
  "pig.png",
  "shakehands.png",
];

const text = [
  ["#PER", "SPECTIVREGION"],
  ["#PERSPEC", "TIVREGION"],
  ["#PERSP", "ECTIVREGION"],
  ["#PERSPE", "CTIVREGION"],
  ["#PERSPECTI", "VREGION"],
  ["#PERSPECTIVR", "EGION"],
  ["#PERS", "PECTIVREGION"],
  ["#PERSPECTIVRE", "GION"],
];

const Marque: React.FunctionComponent<IMarqueProps> = (props) => {
  const getParts = React.useMemo(
    () =>
      text.map((text, index) => {
        return (
          <span key={index} className="mx-4">
            {text[0]}
            <span className="relative inline-block w-[1em] h-[1em] translate-y-[0.15em]">
              <Image
                role="presentation"
                src={`/images/${images[index % images.length]}`}
                alt=""
                layout="fill"
              />
            </span>

            {text[1]}
          </span>
        );
      }),
    []
  );

  return (
    <div className="flex overflow-x-hidden border-t-2 border-b-2  border-black w-full  font-header font-bold text-xl md:text-5xl py-0 whitespace-nowrap">
      <div className=" motion-reduce:animate-none  animate-marquee  ">
        {getParts}
      </div>
      <div className=" motion-reduce:animate-none  animate-marquee  ">
        {getParts}
      </div>
    </div>
  );
};

export default Marque;
