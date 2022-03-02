import List from "./List";
import { ListItemResult } from "@components/Blocks/ListingBlock/ListingsBlock";
import React from "react";
import { Card } from "./Card";
import { Carousel } from "./Carousel";

import { Grid } from "./Grid";
import { ListItem } from "./ListItem";
import Filter from "./Filter";

interface ListingProps {
  title?: string | null;
  items: ListItemResult[];
  variant: "grid" | "list" | "carousel";
  filterItems?: { label: string; value: string }[];
}

const Listing: React.FC<ListingProps> = (props) => {
  const { items, variant = "list", title, filterItems } = props;

  const [filter, setFilter] = React.useState("all");
  const handleFilterChange = (i: { label: string; value: string }) => {
    setFilter(i.value);
  };

  if (variant === "grid") {
    return (
      <Grid>
        {items.map((i) => (
          <Card key={i._id} {...i} />
        ))}
      </Grid>
    );
  }

  if (variant === "list") {
    return (
      <List title={title}>
        {filterItems && (
          <Filter
            active={filter}
            onChange={handleFilterChange}
            items={filterItems}
          />
        )}
        {items.map((i, index) => (
          <ListItem
            key={i._id}
            position={index % 2 === 0 ? "left" : "right"}
            {...i}
          />
        ))}
      </List>
    );
  }

  if (variant === "carousel") {
    return <Carousel items={items} />;
  }

  return null;
};

export default Listing;