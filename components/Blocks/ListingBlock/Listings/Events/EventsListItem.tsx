import * as React from "react";
import Button from "@components/Button/Button";
import RichText from "@components/RichText/RichText";
import Svg from "@components/Svg";
import Typo from "@components/Typography/Typography";

import { EventsListItemResult } from "./EventsListQuery";

interface IEventsListItemProps extends EventsListItemResult {
  accordion?: boolean;
}

const EventsListItem: React.FunctionComponent<IEventsListItemProps> = (
  props
) => {
  const {
    name,
    description,
    content,
    accordion = true,
    link,
    date,
    endDate,
  } = props;

  const [open, setOpen] = React.useState(false);
  const [height, setHeight] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!accordion) return;
    if (open && ref.current) {
      const { height } = ref.current.getBoundingClientRect();
      return setHeight(height);
    }
    return setHeight(0);
  }, [open, accordion]);

  return (
    <li className="mb-20 border-black border-t-2">
      <div className="container  lg:max-w-screen-lg mx-auto px-5 my-12">
        <Typo variant="body-l" bold={false} space={false}>
          {date && parseDate(date)} {endDate && " - " + parseDate(endDate)}
        </Typo>
        <Typo variant="h3">{name}</Typo>
        <Typo>{description}</Typo>
        <div
          style={{
            maxHeight: accordion ? height : undefined,
            transition: "max-height 1s",
          }}
          className=" overflow-hidden"
        >
          <div ref={ref}>
            <RichText content={content} />
          </div>
        </div>

        <div className=" w-full flex justify-between items-center">
          {link && (
            <Button href={link} external={true}>
              jetzt Anmelden
            </Button>
          )}
          {accordion && (
            <button onClick={() => setOpen((i) => !i)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className={`inline-block  stroke-current fill-current  border-2 rounded-full w-9 h-9 md:w-11 md:h-11 p-1.5 border-black ${
                  open ? "rotate-90 " : "-rotate-90"
                }`}
              >
                <path fill="none" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </li>
  );
};

export default EventsListItem;

const parseDate = (date: string | null | undefined) => {
  if (!date) return "";
  const d = new Date(date);

  return d.toLocaleDateString("de");
};
