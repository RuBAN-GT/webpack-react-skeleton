webpack        = require('webpack')
UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports =
  devtool: 'nosources-source-map'

  plugins: [ new UglifyJSPlugin(sourceMap: true) ]
