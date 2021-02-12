// webpack files
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

// devServer
const { devServer } = require('./dev-server');

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

// utils
const { defaults } = require('./utils/defaults');
const pathTo = require('./utils/pathTo');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'bundle.js',
  },
  devtool: 'cheap-module-source-map',
  devServer: devServer,
  plugins: [
    new HtmlWebpackPlugin({
      title: defaults.appTitle,
      filename: 'index.html',
      template: pathTo.htmlTemplateSrc,
      inject: true,
      favicon: pathTo.favIconSrc,
      meta: {
        description: defaults.appTitle,
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    new CaseSensitivePathsPlugin(),
  ],
});
