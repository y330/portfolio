const path = require("path");
const webpack = require("webpack");
const svelteConfig = require("./svelte.config.js");

const appPath = process.cwd();

module.exports = {
  mode: "production",
  entry: path.resolve(appPath, "src/main.js"),
  output: {
    path: path.resolve(appPath, "public"),
    filename: "bundle.js",
    //libraryTarget: 'commonjs'
  },
  module: {
    rules: [
      {
        test: /\.svelte?$/,
        exclude: [path.resolve(appPath, "node_modules")],
        loader: "svelte-loader",
        options: { ...svelteConfig },
      },
      {
        test: /\.m?js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
  devServer: {
    contentBase: path.resolve(appPath, "public"),
    writeToDisk: true,
    port: "tbd",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    disableHostCheck: true,
  },
};
