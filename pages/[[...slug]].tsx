import { useAppContext } from "@components/AppContext";
import appQuery, { appQueryResult } from "@components/AppContext/appQuery";
import HeroBlock from "@components/Blocks/HeroBlock/HeroBlock";
import { heroBlockQuery } from "@components/Blocks/HeroBlock/HeroBlockQuery";
import ListingBlock from "@components/Blocks/ListingBlock/ListingsBlock";
import { listingBlockQuery } from "@components/Blocks/ListingBlock/listingBlockQuery";
import SectionBlock from "@components/Blocks/SectionBlock/SectionBlock";
import { sectionBlockQuery } from "@components/Blocks/SectionBlock/sectionBlockQuery";
import type { layoutQueryResult } from "@components/Layout/LayoutQuery";
import { layoutQuery } from "@components/Layout/LayoutQuery";

import BodyParser from "@lib/SanityPageBuilder/lib/BodyParser";
import fetchStaticPaths from "@lib/SanityPageBuilder/lib/fetchStaticPath/fetchStaticPath";
import fetchStaticProps from "@lib/SanityPageBuilder/lib/fetchStaticProps/fetchStaticProps";
import { sanityClient as client } from "@lib/SanityService/sanity.server";
import type { GetStaticPaths, GetStaticProps } from "next";
import appConfig from "../app.config.json";
const locales = appConfig.locales;

export type PageResult = layoutQueryResult & appQueryResult & { content?: any };

const Page = () => {
  const { data } = useAppContext();

  return (
    <BodyParser
      components={{
        hero: {
          component: HeroBlock,
        },
        section: {
          component: SectionBlock,
        },
        listing: {
          component: ListingBlock,
        },
      }}
      content={data?.content || []}
    />
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetchStaticPaths({
    client,
    doc: "page",
    locales,
  });
  return res;
};

export const getStaticProps: GetStaticProps = async (props) => {
  const { params, preview, locale } = props;
  const res = await fetchStaticProps<PageResult>({
    locale,
    revalidate: true,
    params,
    client,
    previewQuery: `content[]{${heroBlockQuery(locale)},${sectionBlockQuery(
      locale
    )}, ${listingBlockQuery(locale)}}`,
    query: `content[]{${heroBlockQuery(locale)},${sectionBlockQuery(
      locale
    )},${listingBlockQuery(locale)}},  ${layoutQuery(locale)}, ${appQuery(
      locale
    )}`,
    locales,
    preview,
  });

  return res;
};

export default Page;
