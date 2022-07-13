import { imageMeta } from "@lib/SanityImage/query";

export const heroBlockQuery = (locale?: string) => `
_type == "hero" => {
  _type,
  _key,
}
`;

export interface HeroBlogResult {
  _key: string;
  title?: string | null;
  text?: any;
}
