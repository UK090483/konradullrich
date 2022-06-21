import { Section as SectionType } from "types";
import { imageMeta, ImageMetaResult } from "@lib/SanityImage/query";
import { richTextQuery } from "@components/RichText/richtTextQuery";

export const sectionBlockQuery = (locale?: string) => `
_type == "section" => {
  _key,
  _type,
  title,
  bgColor,
  type,
  topSpace,
  bottomSpace,
  imagePosition,
  'content':coalesce(
      content_${locale}[]{${richTextQuery(locale)}},
      content[]{${richTextQuery(locale)}}
      ),
  bgImage{${imageMeta}},
  image{${imageMeta}}
}
`;

export interface SectionResult
  extends Omit<SectionType, "bgImage" | "content" | "image"> {
  content: null | any;
  bgImage: ImageMetaResult;
  image: ImageMetaResult;
  _key: string;
}
