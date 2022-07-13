import { Section as SectionType } from "types";
import { imageMeta, ImageMetaResult } from "@lib/SanityImage/query";
import { richTextQuery } from "@components/RichText/richtTextQuery";
import { SanityBlock } from "@lib/SanityPageBuilder/lib/RichText";

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
  'columns': count(content[_type == "column"]),
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
  content?: SanityBlock[];
  bgImage: ImageMetaResult;
  image: ImageMetaResult;
  columns: number;
  _key: string;
}
