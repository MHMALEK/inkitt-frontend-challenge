// webpack
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

// webpack plugins
const TerserPlugin = require('terser-webpack-plugin');
const WebpackBundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SentryCliPlugin = require('@sentry/webpack-plugin');

// utils
const pathTo = require('./utils/pathTo');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    chunkFilename: '[name].[contenthash:8].chunk.js',
    // devtoolModuleFilenameTemplate: info => path.relative(paths.appSrc, info.absoluteResourcePath).replace(/\\/g, '/'),
  },
  optimization: {
    minimize: true,
    minimizer: [
      // This is only used in production mode
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          // Added for profiling in devtools
          keep_classnames: true,
          keep_fnames: true,
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
      }),
      new CssMinimizerPlugin({
        cache: true,
      }),
    ],
    splitChunks: {
      chunks: 'all',
      name: false,
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].[contenthash:8].css',
      chunkFilename: '[name].[contenthash:8].chunk.css',
    }),
    new WebpackBundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: pathTo.reportSrc,
      defaultSizes: 'gzip',
    }),

    new SentryCliPlugin({
      include: '.',
      ignore: ['node_modules', 'setup'],
    }),
  ],
});
