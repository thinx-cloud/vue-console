process.env.VUE_APP_VERSION = require('./package.json').version;
let publicPath = process.env.NODE_ENV === 'production' ? 'light-blue-vue-admin/' : '/';

module.exports = {
  publicPath,
  productionSourceMap: true,
  configureWebpack: {
    devtool: 'source-map',
  },
};

