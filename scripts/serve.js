"use strict";
const Webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const path = require("path");

const port = 5000;
const appPath = path.resolve(__dirname, "..");
process.chdir(appPath);

const webpackConfig = require("../webpack.config.js");
webpackConfig.mode = "development";
webpackConfig.devServer.port = port;

const compiler = Webpack(webpackConfig);
const server = new WebpackDevServer(compiler, webpackConfig.devServer);

server.listen(port, "127.0.0.1", () => {
  console.log(`Starting server on http://localhost:${port}`);
});
