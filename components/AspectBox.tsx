import * as React from "react";

interface IAspectBoxProps {
  className?: string;
}

const AspectBox: React.FunctionComponent<IAspectBoxProps> = (props) => {
  const { className, children } = props;
  return (
    <div className={`w-full h-full ${className || ""}`}>
      <div className="aspect-w-3 aspect-h-2 ">{children}</div>
    </div>
  );
};

export default AspectBox;
