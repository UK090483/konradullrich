import * as React from "react";

interface ISelectProps {
  options: { label: string | number; value: string | number }[];
  value: any;
  onChange: (value: any) => void;
}

const Select: React.FunctionComponent<ISelectProps> = ({
  options,
  value,
  onChange,
}) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {options.map(({ label, value }) => (
        <option value={value} key={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default Select;
