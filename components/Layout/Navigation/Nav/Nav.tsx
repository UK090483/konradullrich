import Svg from "@components/Svg";
import React from "react";
import { Link } from "@components/Link";
import { Logo } from "@components/Layout/Logo";
import { HeaderNavigation } from "@lib/Navigation";
import { useAppContext } from "@components/AppContext/AppContext";

const Nav: React.FC = () => {
  const { data } = useAppContext();

  const [open, setOpen] = React.useState(false);

  return (
    <>
      <nav>
        <div className="flex items-center justify-between w-full pl-5 h-24">
          <Link href="/">
            <Logo />
          </Link>
          {/* <HeaderNavigation
            items={data?.navigation || []}
            className="items-center justify-center hidden lg:flex"
          /> */}

          {/* <button
            data-testid="menu-overlay-toggle "
            onClick={() => setOpen((s) => !s)}
            className="lg:hidden mr-2"
          >
            <Svg className="w-[30px] h-[30px]" icon="hamburger" />
          </button> */}
        </div>
      </nav>
    </>
  );
};

export default Nav;
