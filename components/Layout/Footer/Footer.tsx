import { useAppColor, useAppContext } from "@components/AppContext/AppContext";
import { Link } from "@components/Link";
import Typo from "@components/Typography/Typography";

import React from "react";
import { Logo } from "../Logo";

const Footer: React.FC = (props) => {
  const { primary } = useAppColor();

  return (
    <footer
      style={{ color: primary }}
      data-testid="footer"
      className="flex flex-col px-3   gap-12 py-12  text-primary"
    >
      <div className="flex flex-col justify-between  gap-12 pb-12 items-center">
        <Link href="/">
          <Logo />
        </Link>
        <Typo space={false} variant="h3" as="p">
          Contact Me
        </Typo>
        <a className=" text-2xl" href="mailto:web@konradullrich.com">
          web@konradullrich.com
        </a>
      </div>

      <p className=" text-center">© 2022 Konrad Ullrich</p>
    </footer>
  );
};

export default Footer;
