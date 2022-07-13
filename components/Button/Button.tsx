import { Link } from "@components/Link";
import React from "react";

type ButtonProps = {
  onClick?: () => void;
  href?: string | null;
  external?: boolean;
  tabIndex?: -1 | 0;
};

const Button: React.FC<ButtonProps> = (props) => {
  const { children, onClick = () => {}, href, external, tabIndex = 0 } = props;

  const className =
    "relative group inline-block px-8 md:px-12 py-1 md:py-2  rounded-md text-base-mobile md:text-base border-2  border-text hover:border-transparent  whitespace-nowrap hover:text-black ";

  if (href) {
    return (
      <Link className={className} href={href} external={external}>
        <ButtonInner />
        {children}
      </Link>
    );
  }

  return (
    <button
      tabIndex={tabIndex}
      onClick={onClick}
      className={className}
      type="button"
    >
      <ButtonInner />
      {children}
    </button>
  );
};

const ButtonInner: React.FC = () => {
  return (
    <div className="absolute -z-10 top-0 w-full rounded-md opacity-0 bg-primary duration-200 h-0 left-0 right-0 group-hover:h-full group-hover:opacity-100 transition-all"></div>
  );
};

export default Button;
