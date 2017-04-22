require('coffee-script/register');

const webpackMerge = require('webpack-merge');
const commonConfig = require(`./config/application.coffee`);

module.exports = function() {
  env = (process.env.NODE_ENV) ? process.env.NODE_ENV : 'development';

  return webpackMerge(
    commonConfig,
    require(`./config/${env}.coffee`)
  );
};
