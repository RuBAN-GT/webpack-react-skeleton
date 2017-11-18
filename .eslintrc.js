module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jest": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "globals": {
    "process.env.NODE_ENV": true
  },
  "parser": "babel-eslint",
  "plugins": [ "react" ],
  "root": true,
  "rules": {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "no-console": 0
  }
}
