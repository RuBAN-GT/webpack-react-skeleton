const webpack           = require('webpack');
const path              = require('path');
const UglifyJSPlugin    = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const jsonMerge         = require('../scripts/json-merge');

module.exports = {
  entry: path.join(__dirname, '../app/app.js'),
  devtool: 'nosources-source-map',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new ExtractTextPlugin('css/app.css'),
    new webpack.DefinePlugin(jsonMerge(
      require('./data.application.json'),
      {
        'process.env.NODE_ENV': process.env.NODE_ENV
      },
      require('./data.prod.json')
    ))
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
