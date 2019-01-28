const webpack = require("webpack");
const withCSS = require("@zeit/next-css");
const isProd = (process.env.NODE_ENV || "production") === "production";

const assetPrefix = isProd ? "/my-website" : "";

const config = withCSS({
  exportPathMap: () => ({
    "/": { page: "/" },
    "/page1": { page: "/page1" }
  }),
  assetPrefix: assetPrefix,
  webpack: (config, options) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.ASSET_PREFIX": JSON.stringify(assetPrefix)
      })
    );
    // options.exportPathMap = () => ({
    //   "/": { page: "/" },
    //   "/page1": { page: "/page1" }
    // });
    // options.assetPrefix = assetPrefix;
    if (options.defaultLoaders.css[2] !== undefined) {
      options.defaultLoaders.css[2].options = {};
    }
    return config;
  }
});
module.exports = config;

// module.exports = withCSS();
