// loaders
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// regexes
const { cssRegex, cssModuleRegex, sassModuleRegex, sassRegex } = require('./regex');

// utils
const { isDevEnv } = require('../../utils/getEnv');

// use extract mini plugin or not
const getExternalCssOrInternalStyles = () => (isDevEnv ? 'style-loader' : MiniCssExtractPlugin.loader);

// to get default Sass Loader options
const getDefaultSassLoaderOptions = () => ({
  loader: 'sass-loader',
  options: {
    sourceMap: isDevEnv,
  },
});

// for css Modules and other css loader options
const getCssLoaderOptions = useCssModules => {
  const defaultOptions = {
    loader: 'css-loader',
  };
  return {
    ...defaultOptions,
    options: { modules: useCssModules },
  };
};

// to get Post CSS loader
const getPostCssLoader = () => ({
  loader: 'postcss-loader',
});

// css files rule
const CSSRules = {
  test: cssRegex,
  oneOf: [
    {
      test: cssModuleRegex,
      use: [getExternalCssOrInternalStyles(), getCssLoaderOptions(true), getPostCssLoader()],
    },
    {
      use: [getExternalCssOrInternalStyles(), getCssLoaderOptions(false), getPostCssLoader()],
    },
  ],
};

// sass files loader
const SassRules = {
  test: sassRegex,
  oneOf: [
    {
      test: sassModuleRegex,
      use: [getExternalCssOrInternalStyles(), getCssLoaderOptions(true), getPostCssLoader(), getDefaultSassLoaderOptions()],
    },
    {
      use: [getExternalCssOrInternalStyles(), getCssLoaderOptions(false), getPostCssLoader(), getDefaultSassLoaderOptions()],
    },
  ],
};

module.exports = { CSSRules, SassRules };
