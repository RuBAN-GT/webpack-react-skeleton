const _ = require('lodash');

module.exports = Object.assign({
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "plugins": [ "react" ],
  "root": true,
  "rules": {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "no-console": 0
  }
}, {
  "globals": _.mapValues(Object.assign(
    require('./config/data.application.json'),
    { 'process.env.NODE_ENV': null },
    require('./config/data.prod.json'),
    require('./config/data.dev.json')
  ), () => { true })
});
