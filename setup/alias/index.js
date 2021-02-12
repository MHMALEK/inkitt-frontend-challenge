const pathTo = require('../utils/pathTo');

const alias = {
  Utils: pathTo.UtilsDir,
  Components: pathTo.ComponentsDir,
  Providers: pathTo.ProvidersDir,
  Store: pathTo.StoreDir,
  Src: pathTo.srcDir,
};

exports.alias = alias;
