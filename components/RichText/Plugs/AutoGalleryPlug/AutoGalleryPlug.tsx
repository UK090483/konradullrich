import * as React from "react";
import AutoGalleryPlugItem from "./AutoGalleryPlugItem";
import { AutoGalleryPlugQueryResult } from "./AutoGalleryPlugQuery";
import { PlugProps } from "../type";

interface IAutoGalleryPlugProps extends AutoGalleryPlugQueryResult {}

const AutoGalleryPlug: React.FC<PlugProps<IAutoGalleryPlugProps>> = (props) => {
  const { items } = props.node;

  return (
    <div className="columns-2 lg:columns-4 gap-3  ">
      {items &&
        items.map((item) => (
          <AutoGalleryPlugItem variant="grid-3" key={item._key} {...item} />
        ))}
    </div>
  );
};

export default AutoGalleryPlug;
