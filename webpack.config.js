const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  plugins: [
    new CopyWebpackPlugin(['style.css'], { context: 'src', copyUnmodified: true }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inlineSource: '.(js|css)$',
    }),
    new HtmlWebpackIncludeAssetsPlugin({ assets: ['style.css'], append: true }),
    new HtmlWebpackInlineSourcePlugin(),
  ],
  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader' },
    ],
  },
};
