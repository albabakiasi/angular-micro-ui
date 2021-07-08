const webpack = require("webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:4202/",
    uniqueName: "timeline",
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "timeline",
      library: { type: "var", name: "timeline" },
      filename: "remoteEntry.js",
      exposes: {
        TimelineModule:
          "./projects/timeline/src/app/timeline/timeline.module.ts",
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
