const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'CBOR Playground',
    }),
  ],
  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader' },
    ],
  },
};
