import React from "react";

type useHoverReturn = [
  value: boolean,
  hoverProps: { onMouseOver: () => void; onMouseOut: () => void }
];
function useHover() {
  const [value, setValue] = React.useState(false);

  const onMouseOver = () => setValue(true);
  const onMouseOut = () => setValue(false);

  return [value, { onMouseOver, onMouseOut }] as useHoverReturn;
}

export default useHover;
