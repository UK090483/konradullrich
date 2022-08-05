import { ImageMetaResult } from "@lib/SanityImage/query";
import urlFor from "@lib/SanityService/sanity.imageBuilder";

type parseSanityImageProps = {
  images: (ImageMetaResult | undefined | null)[];
  w?: number;
  h?: number;
  apiEndpoint?: string;
};

const getLastUrlSegment = (thePath: string) =>
  thePath.substring(thePath.lastIndexOf("/") + 1);

const parseSanityImage = (props: parseSanityImageProps) => {
  const { images, apiEndpoint = "/api/image/", w = 500, h = 500 } = props;

  const parsed = images.reduce((acc, item) => {
    if (!item || !item.url) return acc;
    const url = urlFor(item.url).width(w).height(h).url();
    if (!url) return acc;
    const imageUrl = `${apiEndpoint}${getLastUrlSegment(url)}`;
    return [...acc, imageUrl];
  }, [] as string[]);

  return parsed;
};

export default parseSanityImage;
