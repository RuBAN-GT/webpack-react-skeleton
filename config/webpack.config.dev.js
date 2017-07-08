const webpack    = require('webpack');
const path       = require('path');
const HtmlPlugin = require('html-webpack-harddisk-plugin');
const jsonMerge  = require('../scripts/json-merge');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3333',
    'webpack/hot/only-dev-server',
    path.join(__dirname, '../app/app.js')
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../public'),
    port: 3333,
    watchContentBase: true,
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlPlugin(),
    new webpack.DefinePlugin(jsonMerge(
      require('./data.application.json'),
      {
        'process.env.NODE_ENV': process.env.NODE_ENV
      },
      require('./data.dev.json')
    ))
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(sass|scss)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  }
};
