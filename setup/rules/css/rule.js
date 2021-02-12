// loaders
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// regexes
const { cssRegex, cssModuleRegex, sassModuleRegex, sassRegex } = require('./regex');

// utils
const isDevEnv = require('../../utils/getEnv');

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
const getPostCssLoader = usePostCssLoader =>
  usePostCssLoader
    ? {
        loader: 'postcss-loader',
      }
    : null;

// css files rule
const CSSRules = {
  test: cssRegex,
  oneOf: [
    {
      test: cssModuleRegex,
      use: [getExternalCssOrInternalStyles(), getPostCssLoader(), getCssLoaderOptions(true)],
    },
    {
      use: [getExternalCssOrInternalStyles(), getPostCssLoader(), getCssLoaderOptions(false)],
    },
  ],
};

// sass files loader
const SassRules = {
  test: sassRegex,
  oneOf: [
    {
      test: sassModuleRegex,
      use: [getExternalCssOrInternalStyles(), getPostCssLoader(), getCssLoaderOptions(true), getDefaultSassLoaderOptions()],
    },
    {
      use: [getExternalCssOrInternalStyles(), getPostCssLoader(), getCssLoaderOptions(false), getDefaultSassLoaderOptions()],
    },
  ],
};

module.exports = { CSSRules, SassRules };



// {
//   test: /\.css$/,
//   oneOf: [
//     {
//       test: /\.module\.css$/,
//       use: [
//         MiniCssExtractPlugin.loader,
//         {
//           loader: 'css-loader',
//           options: { modules: true, exportOnlyLocals: false },
//         },
//       ],
//     },
//     {
//       use: [MiniCssExtractPlugin.loader, 'css-loader'],
//     },
//   ],
// },
