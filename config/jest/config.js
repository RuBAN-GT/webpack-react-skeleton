const path = require('path')
const vars = require('../misc/webpackVariables')('production')

module.exports = {
  globals: vars,
  rootDir: path.resolve(__dirname, '../../'),
  setupFiles: [ path.join(__dirname, 'setup.js') ],
  testPathIgnorePatterns: [ '<rootDir>/node_modules/'],
  verbose: true
}