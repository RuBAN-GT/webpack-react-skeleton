const _ = require('lodash');

module.exports = function jsonMerge() {
  let options = _.assign.apply(this, arguments);

  return _.mapValues(options, (item) => {
    if(typeof(item) !== 'boolean') {
      item = JSON.stringify(item);
    }

    return item;
  });
}
