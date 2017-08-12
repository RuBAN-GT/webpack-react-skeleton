const path              = require('path');
const UglifyJSPlugin    = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, '../app/app.js'),
  devtool: 'nosources-source-map',
  plugins: [
    new UglifyJSPlugin({
      parallel: true,
      sourceMap: true,
      uglifyOptions: {
        ecma: 6
      }
    }),
    new ExtractTextPlugin('css/app.css')
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
};
