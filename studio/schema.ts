import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Setting navigation
 *
 *
 */
export interface SettingNavigation extends SanityDocument {
  _type: "settingNavigation";

  /**
   * name — `text`
   *
   *
   */
  name?: string;
}

/**
 * Default SEO / Share
 *
 *
 */
export interface SeoSettings extends SanityDocument {
  _type: "seoSettings";

  /**
   * seo — `seo`
   *
   *
   */
  seo?: Seo;
}

/**
 * Site config
 *
 *
 */
export interface SiteConfig extends SanityDocument {
  _type: "siteConfig";

  /**
   * Home Page — `reference`
   *
   *
   */
  indexPage?: SanityReference<Page>;

  /**
   * Main Navigation — `array`
   *
   *
   */
  mainNav?: Array<
    | SanityKeyed<NavigationItem>
    | SanityKeyed<NavigationDropdown>
    | SanityKeyed<NavigationMegaMenu>
  >;

  /**
   * Default / Seo — `seo`
   *
   *
   */
  seo?: Seo;
}

/**
 * Blog Post
 *
 *
 */
export interface Post extends SanityDocument {
  _type: "post";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   * erreichbar unter http://localhost:3000/posts/...
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Header Image — `image`
   *
   *
   */
  headerImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Preview Image — `image`
   *
   *
   */
  previewImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Categories — `array`
   *
   *
   */
  categories?: Array<SanityKeyedReference<PostCategory>>;

  /**
   * Release date — `date`
   *
   *
   */
  releaseDate?: string;

  /**
   * Use default Header — `boolean`
   *
   *
   */
  default_header?: boolean;

  /**
   * Page sections — `array`
   *
   * Add, edit, and reorder sections
   */
  content?: Array<
    SanityKeyed<Section> | SanityKeyed<Hero> | SanityKeyed<Listing>
  >;

  /**
   * SEO / Share Settings — `seo`
   *
   *
   */
  seo?: Seo;
}

/**
 * Category
 *
 *
 */
export interface PostCategory extends SanityDocument {
  _type: "postCategory";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;
}

/**
 * Page
 *
 *
 */
export interface Page extends SanityDocument {
  _type: "page";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Title Dansk — `string`
   *
   *
   */
  title_da?: string;

  /**
   * Title English — `string`
   *
   *
   */
  title_en?: string;

  /**
   * Description — `text`
   *
   *
   */
  description?: string;

  /**
   * Description Dansk — `text`
   *
   *
   */
  description_da?: string;

  /**
   * Description English — `text`
   *
   *
   */
  description_en?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Slug Dansk — `slug`
   *
   *
   */
  slug_da?: { _type: "slug_da"; current: string };

  /**
   * Slug English — `slug`
   *
   *
   */
  slug_en?: { _type: "slug_en"; current: string };

  /**
   * pageType — `reference`
   *
   *
   */
  pageType?: SanityReference<PageType>;

  /**
   * featuredImage — `defaultImage`
   *
   *
   */
  featuredImage?: DefaultImage;

  /**
   * Page sections — `array`
   *
   * Add, edit, and reorder sections
   */
  content?: Array<
    SanityKeyed<Section> | SanityKeyed<Hero> | SanityKeyed<Listing>
  >;

  /**
   * SEO / Share Settings — `seo`
   *
   *
   */
  seo?: Seo;
}

/**
 * Navigation
 *
 *
 */
export interface Navigation extends SanityDocument {
  _type: "navigation";

  /**
   * Main Navigation — `array`
   *
   *
   */
  item?: Array<SanityKeyed<Link> | SanityKeyed<NavigationDropdown>>;
}

/**
 * Redirect
 *
 *
 */
export interface Redirect extends SanityDocument {
  _type: "redirect";

  /**
   * From — `string`
   *
   *
   */
  from?: string;

  /**
   * To — `string`
   *
   *
   */
  to?: string;

  /**
   * Is Permanent? — `boolean`
   *
   *
   */
  isPermanent?: boolean;
}

/**
 * Footer
 *
 *
 */
export interface Footer extends SanityDocument {
  _type: "footer";

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Page sections — `array`
   *
   * Add, edit, and reorder sections
   */
  content?: Array<
    SanityKeyed<Section> | SanityKeyed<Hero> | SanityKeyed<Listing>
  >;
}

/**
 * Page type
 *
 *
 */
export interface PageType extends SanityDocument {
  _type: "pageType";

  /**
   * name — `string`
   *
   *
   */
  name?: string;

  /**
   * name Dansk — `string`
   *
   *
   */
  name_da?: string;

  /**
   * name English — `string`
   *
   *
   */
  name_en?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Slug Dansk — `slug`
   *
   *
   */
  slug_da?: { _type: "slug_da"; current: string };

  /**
   * Slug English — `slug`
   *
   *
   */
  slug_en?: { _type: "slug_en"; current: string };
}

/**
 * Person
 *
 *
 */
export interface Person extends SanityDocument {
  _type: "person";

  /**
   * name — `string`
   *
   *
   */
  name?: string;

  /**
   * Description — `text`
   *
   *
   */
  description?: string;
}

export type DefaultImage = {
  _type: "defaultImage";
  asset: SanityReference<SanityImageAsset>;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;

  /**
   * Alternative text — `string`
   *
   * Important for SEO and accessiblity.
   */
  alt?: string;
};

export type Link = {
  _type: "link";
  /**
   * Internal link — `reference`
   *
   * Use this to link between pages on the website bli
   */
  internalLink?: SanityReference<Page>;

  /**
   * On Page Position — `string`
   *
   *
   */
  onPage?: string;

  /**
   * External link — `url`
   *
   *
   */
  externalLink?: string;
};

export type PageHeader = {
  _type: "pageHeader";
  /**
   * Initial Page header color — `string`
   *
   *
   */
  color?: "white" | "black";

  /**
   * PageTitle without Logo — `boolean`
   *
   *
   */
  withOutLogo?: boolean;
};

export type Seo = {
  _type: "seo";
  /**
   * Meta Title — `string`
   *
   * Title used for search engines and browsers.
   */
  metaTitle?: string;

  /**
   * Meta Description — `text`
   *
   * Description for search engines.
   */
  metaDesc?: string;

  /**
   * Share Title — `string`
   *
   * TItle used for social sharing cards.
   */
  shareTitle?: string;

  /**
   * Share Description — `text`
   *
   * Description for social sharing cards.
   */
  shareDesc?: string;

  /**
   * Share Graphic — `image`
   *
   * Share graphics will be cropped to 1200x630
   */
  shareGraphic?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
};

export type NavigationDropdown = {
  _type: "navigationDropdown";
  /**
   * Label — `string`
   *
   *
   */
  label?: string;

  /**
   * Main Navigation — `array`
   *
   *
   */
  items?: Array<SanityKeyed<NavigationItem>>;
};

export type NavigationItem = {
  _type: "navigationItem";
  /**
   * Label — `string`
   *
   *
   */
  label?: string;

  /**
   * Label Dansk — `string`
   *
   *
   */
  label_da?: string;

  /**
   * Label English — `string`
   *
   *
   */
  label_en?: string;

  /**
   * Link — `link`
   *
   *
   */
  link?: Link;
};

export type NavigationMegaMenu = {
  _type: "navigationMegaMenu";
  /**
   * Label — `string`
   *
   *
   */
  label?: string;

  /**
   * Main Navigation — `array`
   *
   *
   */
  items?: Array<
    SanityKeyed<NavigationMegaMenuItem> | SanityKeyed<NavigationItem>
  >;
};

export type NavigationMegaMenuItem = {
  _type: "navigationMegaMenuItem";
  /**
   * Label — `string`
   *
   *
   */
  label?: string;

  /**
   * Main Navigation — `array`
   *
   *
   */
  items?: Array<SanityKeyed<NavigationItem>>;
};

export type LocaleString = {
  _type: "localeString";
  /**
   * Deutsch — `string`
   *
   *
   */
  de?: string;

  /**
   * Dansk — `string`
   *
   *
   */
  dk?: string;

  /**
   * English — `string`
   *
   *
   */
  en?: string;
};

export type Section = {
  _type: "section";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Content — `defaultRichText`
   *
   *
   */
  content?: DefaultRichText;

  /**
   * Content Dansk — `defaultRichText`
   *
   *
   */
  content_da?: DefaultRichText;

  /**
   * Content English — `defaultRichText`
   *
   *
   */
  content_en?: DefaultRichText;

  /**
   * Type — `string`
   *
   *
   */
  type?: "m" | "l" | "s";

  /**
   * Background Color — `string`
   *
   *
   */
  bgColor?: "black" | "white" | "primary" | "secondary" | "grey";

  /**
   * Top Space — `string`
   *
   *
   */
  topSpace?: "s" | "m" | "l" | "xl" | "xxl";

  /**
   * Bottom Space — `string`
   *
   *
   */
  bottomSpace?: "s" | "m" | "l" | "xl" | "xxl";

  /**
   * Image — `defaultImage`
   *
   *
   */
  image?: DefaultImage;

  /**
   * Image Position — `string`
   *
   *
   */
  imagePosition?: "l" | "r";
};

export type Listing = {
  _type: "listing";
  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Name Dansk — `string`
   *
   *
   */
  name_da?: string;

  /**
   * Name English — `string`
   *
   *
   */
  name_en?: string;

  /**
   * Variant — `string`
   *
   *
   */
  variant?: "grid" | "list" | "carousel";

  /**
   * Type — `string`
   *
   *
   */
  type?: "contentType" | "custom";

  /**
   * contentType — `string`
   *
   *
   */
  contentType?: "page" | "post" | "project";

  /**
   * customItems — `array`
   *
   *
   */
  customItems?: Array<SanityKeyedReference<Page>>;
};

export type DefaultRichText = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;

      /**
       * Alternative text — `text`
       *
       * Some of your visitors cannot see images, 
            be they blind, color-blind, low-sighted; 
            alternative text is of great help for those 
            people that can rely on it to have a good idea of 
            what's on your page.
       */
      alt?: string;
    }>
  | SanityKeyed<Button>
  | SanityKeyed<Spacer>
  | SanityKeyed<ImageGalleryPlug>
>;

export type Hero = {
  _type: "hero";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Title Dansk — `string`
   *
   *
   */
  title_da?: string;

  /**
   * Title English — `string`
   *
   *
   */
  title_en?: string;

  /**
   * Text — `array`
   *
   *
   */
  text?: Array<SanityKeyed<SanityBlock>>;

  /**
   * Text Dansk — `array`
   *
   *
   */
  text_da?: Array<SanityKeyed<SanityBlock>>;

  /**
   * Text English — `array`
   *
   *
   */
  text_en?: Array<SanityKeyed<SanityBlock>>;
};

export type Button = {
  _type: "button";
  /**
   * Label — `string`
   *
   *
   */
  label?: string;

  /**
   * Link — `link`
   *
   *
   */
  link?: Link;

  /**
   * Position — `string`
   *
   *
   */
  position?: "inline" | "left" | "right" | "center";
};

export type Spacer = {
  _type: "spacer";
  /**
   * Space — `string`
   *
   *
   */
  space?: "s" | "m" | "l" | "xl" | "xxl";
};

export type ImageGalleryPlug = {
  _type: "imageGalleryPlug";
  /**
   * title — `string`
   *
   *
   */
  name?: string;

  /**
   * Images — `array`
   *
   *
   */
  items?: Array<SanityKeyed<ImageGalleryItem>>;

  /**
   * Rows — `number`
   *
   *
   */
  rows?: number;

  /**
   * Rows Mobile — `number`
   *
   *
   */
  rows_mobile?: number;

  /**
   * Ratio — `string`
   *
   *
   */
  ratio?: "1:1" | "16:9" | "2:3" | "3:2";
};

export type ImageGalleryItem = {
  _type: "imageGalleryItem";
  /**
   * title — `text`
   *
   *
   */
  title?: string;

  /**
   * Image — `defaultImage`
   *
   *
   */
  image?: DefaultImage;

  /**
   * Link — `link`
   *
   *
   */
  link?: Link;

  /**
   * Size — `string`
   *
   *
   */
  size?: "m" | "l";
};

export type Documents =
  | SettingNavigation
  | SeoSettings
  | SiteConfig
  | Post
  | PostCategory
  | Page
  | Navigation
  | Redirect
  | Footer
  | PageType
  | Person;
