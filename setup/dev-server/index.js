const pathTo = require('../utils/pathTo');

const devServer = {
  compress: true,
  contentBase: pathTo.buildDir,
  port: 4000,
  historyApiFallback: true,
  hot: true,
  open: true,
  after: function (app, server, compiler) {
    console.log('dev server is up and started')
  },
};
exports.devServer = devServer;
