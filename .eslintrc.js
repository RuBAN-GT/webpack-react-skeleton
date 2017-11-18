module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/react'
  ],
  globals: {
    'process.env.NODE_ENV': true
  },
  parser: 'babel-eslint',
  plugins: [
    'prettier',
    'react'
  ],
  root: true,
  rules: {
    'no-console': 0,
    'prettier/prettier': 1
  }
}
