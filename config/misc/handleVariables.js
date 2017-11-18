const _ = require('lodash')

/**
 * Transform objects for passing to `DefinePlugin`.
 *
 * @see https://webpack.js.org/plugins/define-plugin/
 *
 * @param  {Object} object
 * @return {Object}
 */
module.exports = function(...objects) {
  const result = {}

  objects.forEach(object => {
    _.merge(result, _.mapValues(object, item => JSON.stringify(item)))
  })

  return result
}