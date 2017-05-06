const webpackMerge = require('webpack-merge');
const commonConfig = require('./config/webpack.config.application.js');

module.exports = function() {
  if (process.env.NODE_ENV == 'development') {
    env = 'dev'
  }
  else if (process.env.NODE_ENV == 'production') {
    env = 'prod'
  }
  else {
    env = process.env.NODE_ENV
  }

  return webpackMerge(
    commonConfig,
    require(`./config/webpack.config.${env}.js`)
  );
};
