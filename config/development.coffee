webpack = require('webpack')
path    = require('path')

module.exports =
  devtool: 'eval-source-map'

  devServer:
    contentBase: path.resolve(__dirname, '../public')
    port: 3333
    watchContentBase: true
    hot: false

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
