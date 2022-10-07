import "../styles/globals.css";
import { NextComponentType, NextPageContext } from "next";
import { useRouter } from "next/router";
import { Layout } from "@components/Layout/Layout";

import Cookie from "@lib/Cookie/Cookie";

import { PageProps } from "@lib/SanityPageBuilder/types";
import usePreviewSubscription from "@lib/SanityPageBuilder/lib/preview/previewSubscription";
import { AppContextProvider } from "@components/AppContext/AppContext";
import PreviewIndicator from "@lib/SanityPageBuilder/lib/preview/PreviewIndicator";

import { PageTransitionWrap } from "@components/PageTransition/PagetransitionWrap";
import Seo from "@lib/SeoService/Seo";
import { PageResult } from "./[[...slug]]";

interface AppPropsWithStaticProps {
  pageProps: PageProps<PageResult>;
  Component: NextComponentType<NextPageContext, any, PageProps<PageResult>>;
}
//
function App({ Component, pageProps: _pageProps }: AppPropsWithStaticProps) {
  const { data: _data, query, preview } = _pageProps;

  const { data, error } = usePreviewSubscription<PageResult | null>(query, {
    initialData: _data,
    enabled: preview,
  });

  const pageProps = { ..._pageProps, ...data };
  const { asPath } = useRouter();

  return (
    <>
      <Seo {...pageProps.data?.seo} />
      <AppContextProvider data={pageProps.data} hostName={"hostname"}>
        <Layout {...pageProps}>
          <PageTransitionWrap id={pageProps._id || asPath || "no"}>
            <AppContextProvider
              key={pageProps._id || asPath || "no"}
              data={pageProps.data}
              hostName={"hostname"}
            >
              <Component {...pageProps} />
            </AppContextProvider>
          </PageTransitionWrap>
        </Layout>
        {preview && <PreviewIndicator show={preview} />}
        <Cookie />
      </AppContextProvider>
    </>
  );
}

export default App;
