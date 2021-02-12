// webpack
const webpack = require('webpack');

// webpack plugins
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

// rules
const { CSSRules, SassRules } = require('./rules/css/rule');
const { typescriptAndJsRule, sourceMapGeneratorRule } = require('./rules/typescript/rule');
const { staticAssetsRuleWebpackVersionFive } = require('./rules/static/rule');
const { extensions } = require('./extensions');
const { alias } = require('./alias');

// utils
const pathTo = require('./utils/pathTo');

module.exports = {
  entry: ['react-hot-loader/patch', pathTo.entryPointSrc],
  output: {
    filename: '[name].[contenthash:8].js',
    path: pathTo.buildDir,
    assetModuleFilename: 'assets/[hash][ext][query]',
    globalObject: 'this',
  },
  module: {
    rules: [typescriptAndJsRule, CSSRules, SassRules, sourceMapGeneratorRule, staticAssetsRuleWebpackVersionFive],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
      DEBUG: false,
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        mode: 'write-references',
      },
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new WebpackManifestPlugin({
      fileName: 'asset-manifest.json',
      publicPath: pathTo,
    }),
    new ESLintPlugin({
      // Plugin options
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      context: pathTo.appSrc,
      cwd: pathTo.appPath,
    }),
  ],
  resolve: {
    modules: ['node_modules'],
    extensions,
    alias: {
      'react-dom': '@hot-loader/react-dom',
      ...alias,
    },
  },
  target: 'web',
  // node: {
  //   module: 'empty',
  //   dgram: 'empty',
  //   dns: 'mock',
  //   fs: 'empty',
  //   http2: 'empty',
  //   net: 'empty',
  //   tls: 'empty',
  //   child_process: 'empty',
  // },
};
