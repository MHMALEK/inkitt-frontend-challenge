const { typeScriptAndJsRegex } = require('./regex');

const typescriptAndJsRule = {
  // I didn't seperate them because no needed it that
  test: typeScriptAndJsRegex,
  use: {
    loader: 'babel-loader',
    // babel config is defined in seperate .babelrc and it's not in here
  },
};

const sourceMapGeneratorRule = {
  loader: 'source-map-loader',
  test: /\.js$/,
  exclude: /node_modules/,
  enforce: 'pre',
};

exports.sourceMapGeneratorRule = sourceMapGeneratorRule;
exports.typescriptAndJsRule = typescriptAndJsRule;
