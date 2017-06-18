const webpack = require("webpack");
const path = require("path");
const config = {
  entry: path.resolve("src/index.js"),
  devtool: "source-map",
  output: {
    path: path.resolve("lib"),
    filename: "lh.js",
    library: "LH",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;
