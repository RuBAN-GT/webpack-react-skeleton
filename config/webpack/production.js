const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: ['babel-polyfill', path.join(__dirname, '../../app/index.js')],
  output: { filename: 'js/[name].[chunkhash].js' },
  devtool: 'nosources-source-map',
  plugins: [
    new ExtractTextPlugin('css/app.[chunkhash].css'),
    new UglifyJSPlugin({
      parallel: true,
      sourceMap: true,
      uglifyOptions: { ecma: 6 }
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'postcss-loader']
        })
      },
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        })
      }
    ]
  }
}
