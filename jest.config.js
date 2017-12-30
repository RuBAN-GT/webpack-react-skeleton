const _ = require('lodash')
const path = require('path')
const vars = require('./config/misc/webpackVariables')('production')

module.exports = {
  collectCoverageFrom: ['app/**/*.{js,jsx}'],
  coverageDirectory: '<rootDir>/tmp/jest',
  coverageReporters: ['lcov', 'text'],
  globals: _.mapValues(vars, item => JSON.parse(item)),
  moduleNameMapper: { '^.+\\.(css|scss|sass)$': 'identity-obj-proxy' },
  rootDir: path.resolve(__dirname),
  snapshotSerializers: ['<rootDir>/node_modules/enzyme-to-json/serializer'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  verbose: true
}
