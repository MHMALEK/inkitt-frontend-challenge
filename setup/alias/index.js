const pathTo = require('../utils/pathTo');

const alias = {
  Utils: pathTo.UtilsDir,
  Components: pathTo.ComponentsDir,
  Providers: pathTo.ProvidersDir,
  Src: pathTo.srcDir,
};

exports.alias = alias;
