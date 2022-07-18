import { imageMeta, ImageMetaResult } from "@lib/SanityImage/query";

const appQuery = (locale?: string) => `
_id,
'homeRoute':*[_id == 'siteConfig'][0].indexPage->{ 'slug':slug.current,'slug_en':slug_en.current,'slug_da':slug_da.current },
'slug':coalesce('/'+pageType->slug_${locale}.current, '/'+pageType->slug.current,'') +'/'+ coalesce(slug_${locale},slug).current,
'pageType':pageType->{'name':coalesce(name_${locale},name),_id},
'subTitle':coalesce(subTitle_${locale},subTitle),
'featuredImage':featuredImage{${imageMeta}},
'autoColors':featuredImage.asset->metadata.palette,
primaryColor,
secondaryColor
`;

type SanityImagePallet = {
  background: string;
  foreground: string;
  population: number;
  title: string;
};

export type appQueryResult = {
  _id: string;
  title?: string | null;
  homeRoute?: { [k: string]: string };
  slug?: string | null;
  pageType?: { name?: string; _id: string };
  featuredImage?: ImageMetaResult;
  subTitle?: string | null;
  primaryColor?: string;
  secondaryColor?: string;

  autoColors?: Record<
    | "darkMuted"
    | "darkVibrant"
    | "dominant"
    | "lightMuted"
    | "lightVibrant"
    | "muted"
    | "vibrant",
    SanityImagePallet
  >;
};

export default appQuery;
