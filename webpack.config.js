const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');
const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  plugins: [
    new CopyWebpackPlugin(['style.css'], { context: 'src' }),
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    new StyleExtHtmlWebpackPlugin({ minify: true }),
  ],
  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader' },
    ],
  },
};
