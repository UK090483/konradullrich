/** @type {import('next').NextConfig} */

const appConfig = require("./app.config.json");
const withPWA = require("next-pwa");

const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const config = {
  i18n: {
    locales: Object.keys(appConfig.locales),
    defaultLocale: Object.entries(appConfig.locales).reduce(
      (acc, [key, lang]) => (lang.isDefault ? key : acc),
      null
    ),
  },

  env: {
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    SANITY_PROJECT_DATASET: process.env.SANITY_PROJECT_DATASET,
  },

  reactStrictMode: true,
  images: {
    domains: ["picsum.photos", "cdn.sanity.io", "www.perspektivregion.eu"],
  },

  webpack(config, options) {
    const { dev, isServer } = options;

    // Do not run type checking twice:
    if (dev && isServer) {
      config.plugins.push(new ForkTsCheckerWebpackPlugin());
    }
    return config;
  },
};

module.exports = config;
