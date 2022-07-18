import { useAppContext } from "@components/AppContext/AppContext";

import React from "react";

const Footer: React.FC = (props) => {
  const { data } = useAppContext();

  return (
    <footer
      data-testid="footer"
      className="flex flex-col items-center "
    ></footer>
  );
};

export default Footer;
