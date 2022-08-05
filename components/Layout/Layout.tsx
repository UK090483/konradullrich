import React from "react";
import { useAppContext } from "@components/AppContext/AppContext";
import SkipToContent from "@lib/SkipToContent/SkipComponent";
import { Background } from "@components/Background";
import Footer from "./Footer";
import Head from "./Head";
import { LayoutContextProvider } from "./LayoutContext";
import Nav from "./Navigation/Nav/Nav";
import { Header } from "./Header/Header";

export const Layout: React.FC = (props) => {
  const { children } = props;

  const { data } = useAppContext();

  return (
    <>
      <LayoutContextProvider homeRoute={data?.homeRoute}>
        <SkipToContent containerId="main-content" />
        <Header>
          <Nav />
        </Header>
        <Head />
        <main id="main-content" className=" relative min-h-screen select-none">
          <Background className="fixed top-0 left-0 right-0 -z-10 " />
          {children}
        </main>
        {data && <Footer />}
      </LayoutContextProvider>
    </>
  );
};
