const webpack = require("webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:4205/",
    uniqueName: "product",
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "product",
      library: { type: "var", name: "product" },
      filename: "remoteEntry.js",
      exposes: {
        ProductModule:
          "./projects/product/src/app/product/product.module.ts",
      },
      shared: {
        "@angular/core": { singleton: true, eager: true },
        "@angular/common": { singleton: true, eager: true },
        "@angular/router": { singleton: true, eager: true },
        "@ngxs/store": { singleton: true, eager: true },
        "@ngx-translate/core": { eager: true, singleton: true },
        "shared": { singleton: true, eager: true },
      },
    }),
  ],
};
