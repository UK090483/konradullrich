import * as React from "react";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FunctionComponent<IButtonProps> = ({ children }) => {
  return <button className=" bg-slate-400 text-black">{children}</button>;
};

export default Button;
