import React from "react";
import NextHead from "next/head";

interface HeadProps {
  name?: string;
}

const Head: React.FunctionComponent<HeadProps> = ({ name }) => {
  return (
    <NextHead>
      <title>Konrad Ullrich {name ? `/ ${name}` : ""}</title>
      <link rel="icon" href="/icon.svg"></link>
      {/* <meta
        name="description"
        content="Generated width love by create next app"
      /> */}

      {/* <link
        rel="preload"
        href="/fonts/PPRightGrotesk-CompactBlack.woff2"
        as="font"
        crossOrigin=""
      /> */}
    </NextHead>
  );
};

export default Head;
