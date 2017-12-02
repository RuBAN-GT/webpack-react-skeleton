const fs = require('fs')
const handleVariables = require('./handleVariables')
const path = require('path')

/**
 * Get total variables to `DefinePlugin`.
 *
 * @see https://webpack.js.org/plugins/define-plugin/
 *
 * @param  {String} [env=null]
 * @return {Object}
 */
module.exports = function(env = null) {
  let variables = [
    require(path.join(__dirname, '../variables/application.json'))
  ]

  if (env && fs.existsSync(path.join(__dirname, `../variables/${env}.json`))) {
    variables.push(require(path.join(__dirname, `../variables/${env}.json`)))
    variables.push({ 'process.env.REAL_ENV': env })
  }

  return handleVariables(...variables)
}
