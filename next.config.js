const webpack = require("webpack");
const withCSS = require("@zeit/next-css");
const prod = process.env.NODE_ENV === "production";

const assetPrefix = prod ? "/my-website" : "http://localhost:3000";

const config = withCSS({
  exportPathMap: () => ({
    "/": { page: "/" },
    "/page1": { page: "/page1" }
  }),
  assetPrefix: assetPrefix,
  webpack: (config, options) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.BACKEND_URL": JSON.stringify(assetPrefix)
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
