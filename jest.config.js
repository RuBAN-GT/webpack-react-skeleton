const _ = require('lodash')
const path = require('path')
const vars = require('./config/misc/webpackVariables')('production')

module.exports = {
  globals: _.mapValues(vars, item => JSON.parse(item)),
  moduleNameMapper: { '^.+\\.(css|scss|sass)$': 'identity-obj-proxy' },
  rootDir: path.resolve(__dirname),
  snapshotSerializers: ['<rootDir>/node_modules/enzyme-to-json/serializer'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  verbose: true
}
