import ReactTooltip from "react-tooltip";
import * as React from "react";
import Typo from "@components/Typography/Typography";
import SanityImage from "@lib/SanityImage";
import { ImageMetaResult } from "@lib/SanityImage/query";

interface IPersonListItemProps {
  name?: null | string;
  position?: null | string;
  description?: null | string;
  avatar?: null | ImageMetaResult;
  variant?: string | null;
  _id: string;
}

const PersonListItem: React.FunctionComponent<IPersonListItemProps> = (
  props
) => {
  const { name, description, position, avatar, _id, variant } = props;

  const isImage = variant === "image";

  return (
    <li className="flex flex-col items-center justify-center sm:min-w-[150px] w-1/2   sm:w-1/4 py-8 self-start">
      <div className="tooltip hidden" />
      <div
        className={`relative h-24  sm:h-32  overflow-hidden ${
          isImage ? "w-full" : "rounded-full w-24 sm:w-32"
        } `}
      >
        <SanityImage image={avatar} objectFit={isImage ? "contain" : "cover"} />
      </div>

      <div className="pt-3 h-12 flex flex-col items-center justify-center ">
        <Typo
          bold
          variant="h4"
          space={false}
          className=" uppercase  text-center"
        >
          {name}
        </Typo>
      </div>
      <Typo className="whitespace-pre-line text-center w-60">{position}</Typo>
      <button
        className=" underline   text-sm sm:text-base "
        data-tip
        data-for={_id}
      >
        mehr Erfahren
      </button>

      <ReactTooltip
        overridePosition={(position) => {
          const wWidth = window.innerWidth;
          const needFitLeft = position.left < 0;
          const needFitRight = position.left + 280 > wWidth;
          const needFitTop = position.top < 0;
          let p = { ...position };
          if (needFitLeft) {
            p = { ...p, left: 20 };
          }
          if (needFitRight) {
            p = { ...p, left: wWidth - 300 };
          }
          if (needFitTop) {
            p = { ...p, top: 20 };
          }
          return p;
        }}
        id={_id}
        effect="float"
        multiline={true}
        className="tooltip"
      >
        {description}
      </ReactTooltip>
    </li>
  );
};

export default PersonListItem;
