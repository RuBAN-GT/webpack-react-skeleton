const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: ['babel-polyfill', path.join(__dirname, '../../app/index.js')],
  output: { filename: 'js/[name].[chunkhash].js' },
  devtool: 'nosources-source-map',
  plugins: [
    new ExtractTextPlugin('css/app.[chunkhash].css'),
    new webpack.optimize.ModuleConcatenationPlugin(),
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
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: true,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            },
            'postcss-loader',
            'sass-loader'
          ]
        })
      }
    ]
  }
}
