const path = require('path')
const vars = require('./misc/webpackVariables')('production')

module.exports = {
  globals: vars,
  rootDir: path.resolve(__dirname, '../'),
  testPathIgnorePatterns: [ '<rootDir>/node_modules/'],
  verbose: true
}