const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'main.js',
  },
  plugins: [
    new WasmPackPlugin({
      crateDirectory: __dirname,
      outDir: 'build',
    }),
    new CopyWebpackPlugin({
      patterns: ['src/style.css'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inlineSource: '.(js|css)$',
      inject: 'body',
    }),
    new HtmlWebpackTagsPlugin({ tags: ['style.css'], append: true }),
    new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin),
    new PreloadWebpackPlugin(),
  ],
  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader', exclude: /node_modules/ },
    ],
  },
  experiments: {
    syncWebAssembly: true,
  },
};
