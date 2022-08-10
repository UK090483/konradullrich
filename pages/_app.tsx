import "../styles/globals.css";
import { NextComponentType, NextPageContext } from "next";
import { useRouter } from "next/router";
import { Layout } from "@components/Layout/Layout";

import Cookie from "@lib/Cookie/Cookie";

import { PageProps } from "@lib/SanityPageBuilder/types";
import usePreviewSubscription from "@lib/SanityPageBuilder/lib/preview/previewSubscription";
import { AppContextProvider } from "@components/AppContext/AppContext";
import PreviewIndicator from "@lib/SanityPageBuilder/lib/preview/PreviewIndicator";

// import {
//   AnimatePresence,
//   domAnimation,
//   LazyMotion,
//   motion,
// } from "framer-motion";
import { animations } from "@lib/animations";
import { PageTransitionWrap } from "@components/PageTransition/PagetransitionWrap";
import Seo from "@lib/SeoService/Seo";
import { PageResult } from "./[[...slug]]";

interface AppPropsWithStaticProps {
  pageProps: PageProps<PageResult>;
  Component: NextComponentType<NextPageContext, any, PageProps<PageResult>>;
}

function App({ Component, pageProps: _pageProps }: AppPropsWithStaticProps) {
  const { data: _data, query, preview } = _pageProps;

  const { data, error } = usePreviewSubscription<PageResult | null>(query, {
    initialData: _data,
    enabled: preview,
  });

  const pageProps = { ..._pageProps, ...data };

  const { asPath } = useRouter();

  const animation = animations[0];

  console.log(pageProps.data?.seo);

  return (
    <>
      <Seo {...pageProps.data?.seo} />
      <AppContextProvider data={pageProps.data} hostName={"hostname"}>
        {/* <LazyMotion features={domAnimation}> */}
        <Layout {...pageProps}>
          {/* <AnimatePresence exitBeforeEnter>
              <motion.div
                key={pageProps._id}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={animation.variants}
                transition={animation.transition}
              > */}
          <PageTransitionWrap id={pageProps._id || asPath || "no"}>
            <AppContextProvider
              key={pageProps._id || asPath || "no"}
              data={pageProps.data}
              hostName={"hostname"}
            >
              <Component {...pageProps} />
            </AppContextProvider>
          </PageTransitionWrap>
          {/* </motion.div>
            </AnimatePresence> */}
        </Layout>
        {/* </LazyMotion> */}

        {preview && <PreviewIndicator show={preview} />}
        <Cookie />
      </AppContextProvider>
    </>
  );
}

export default App;
