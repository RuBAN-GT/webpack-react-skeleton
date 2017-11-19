const fs = require('fs')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const webpackVariables = require('./config/misc/webpackVariables')

/**
 * Generate webpack configuration for current envrionment
 *
 * @return {Object} with webpack configuration
 */
module.exports = function() {
  // Set project envrionment
  const env = process.env.NODE_ENV || 'development'

  // Merge webpack config
  if (fs.existsSync(`./config/webpack/${env}.js`) == false) {
    throw `You should create webpack configuration for ${env}`
  }
  let config = webpackMerge(
    require('./config/webpack/application.js'),
    require(`./config/webpack/${env}.js`)
  )

  // Merge webpack variables
  config = webpackMerge(config, {
    plugins: [new webpack.DefinePlugin(webpackVariables(env))]
  })

  return config
}
