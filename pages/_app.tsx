import "../styles/globals.css";

import { Layout } from "@components/Layout/Layout";
import { NextComponentType, NextPageContext } from "next";
import Cookie from "@lib/Cookie/Cookie";

import Seo from "@lib/SeoService/Seo";

import { PageProps } from "@lib/SanityPageBuilder/types";
import usePreviewSubscription from "@lib/SanityPageBuilder/lib/preview/previewSubscription";
import { AppContextProvider } from "@components/AppContext/AppContext";
import PreviewIndicator from "@lib/SanityPageBuilder/lib/preview/PreviewIndicator";
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

  const pageProps = { ..._pageProps, data };

  return (
    <>
      <AppContextProvider data={pageProps.data} hostName={"hostname"}>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
        {preview && <PreviewIndicator show={preview} />}
        <Cookie />
      </AppContextProvider>
    </>
  );
}

export default App;
