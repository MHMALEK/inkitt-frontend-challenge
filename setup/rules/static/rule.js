const { staticFilesRegex } = require('./regex');

const staticAssetsRuleWebpackVersionFive = {
  test: staticFilesRegex,
  type: 'asset/resource',
};

const staticAssetsRuleForOlderVersions = {
  test: staticFilesRegex,
  use: [
    {
      loader: 'url-loader',
      options: {
        limit: 8192,
      },
    },
  ],
};

exports.staticAssetsRuleWebpackVersionFive = staticAssetsRuleWebpackVersionFive;
exports.staticAssetsRuleForOlderVersions = staticAssetsRuleForOlderVersions;
