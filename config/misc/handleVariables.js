const _ = require('lodash')

/**
 * Transform objects for passing to `DefinePlugin`.
 *
 * @see https://webpack.js.org/plugins/define-plugin/
 *
 * @param  {Array} object
 * @return {Object}
 */
module.exports = function(...objects) {
  let result = {}

  objects.forEach(object => {
    result = _.merge(result, object)
  })

  return _.mapValues(result, item => JSON.stringify(item))
}
