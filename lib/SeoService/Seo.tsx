import React from "react";
import { NextSeo } from "next-seo";
import { SeoType } from "./SeoQuerys";

interface SeoProps extends SeoType {
  pageUrl?: string;
}

const metaImageParams = "?w=1200&h=630&bg=fff&fit=fillmax";

const Seo: React.FC<SeoProps> = (props) => {
  const {
    metaTitle,
    metaDesc,
    shareTitle,
    shareDesc,
    canonical,
    shareGraphic,
    pageUrl = "https://www.konradullrich.com/",
  } = props;
  const canUrl = `${pageUrl}${canonical}`;

  return (
    <NextSeo
      nofollow={false}
      noindex={false}
      title={metaTitle}
      description={metaDesc}
      canonical={canUrl}
      openGraph={{
        url: canUrl,
        title: shareTitle,
        description: shareDesc,
        type: "page",
        images: [
          {
            url: shareGraphic + metaImageParams || "",
            width: 800,
            height: 600,
            alt: "logo",
            type: "image/jpeg",
          },
        ],
        site_name: "Portfolio / Konrad Ullrich",
      }}
    />
  );
};
export default Seo;
