webpack    = require('webpack')
path       = require('path')
HtmlPlugin = require('html-webpack-harddisk-plugin')

module.exports =
  entry: [
    'react-hot-loader/patch'
    'webpack-dev-server/client?http://localhost:3333'
    'webpack/hot/only-dev-server'
    path.join(__dirname, '../app/app.js')
  ]

  devtool: 'eval-source-map'

  devServer:
    contentBase: path.resolve(__dirname, '../public')
    port: 3333
    watchContentBase: true
    hot: true
    historyApiFallback: true

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlPlugin()
  ]

  module: rules: [
    {
      test: /\.css$/
      use: [ 'style-loader', 'css-loader', 'postcss-loader' ]
    }
    {
      test: /\.(sass|scss)$/
      use: [ 'style-loader', 'css-loader', 'postcss-loader', 'sass-loader' ]
    }
  ]
