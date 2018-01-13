const _ = require('lodash')
const path = require('path')
const vars = require('./config/misc/webpackVariables')('test')

module.exports = {
  collectCoverageFrom: ['app/**/*.{js,jsx}'],
  coverageDirectory: '<rootDir>/tmp/jest',
  coverageReporters: ['lcov', 'text'],
  globals: _.mapValues(vars, item => JSON.parse(item)),
  moduleNameMapper: { '^.+\\.(css|scss|sass)$': 'identity-obj-proxy' },
  rootDir: path.resolve(__dirname),
  snapshotSerializers: ['<rootDir>/node_modules/enzyme-to-json/serializer'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  transform: { '.*': '<rootDir>/node_modules/babel-jest' },
  verbose: true
}
