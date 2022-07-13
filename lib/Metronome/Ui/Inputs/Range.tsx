import * as React from "react";

interface IRangeProps {
  value: number;
  onChange: (val: number) => void;
  min: number;
  max: number;
}

const Range: React.FunctionComponent<IRangeProps> = ({
  value,
  onChange,
  min,
  max,
}) => {
  return (
    <>
      {value}

      <input
        value={value * 1000}
        onChange={(e) => onChange(parseFloat(e.target.value) / 1000)}
        type="range"
        min={min * 1000}
        max={max * 1000}
      />
    </>
  );
};

export default Range;
