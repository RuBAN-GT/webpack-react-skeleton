const webpack = require('webpack');
const path    = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = {
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, '../public/assets'),
    publicPath: '/assets/'
  },
  resolve: {
    alias: {
      vendor: path.resolve(__dirname, '../vendor/'),
      root: path.resolve(__dirname, '../app/'),
      assets: path.resolve(__dirname, '../app/assets/'),
      stylesheets: path.resolve(__dirname, '../app/stylesheets/')
    },
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      inject: 'body',
      alwaysWriteToDisk: true,
      filename: path.join('../index.html')
    }),
    new HtmlWebpackHarddiskPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|otf|ttf|svg)$/,
        exclude: [path.resolve(__dirname, '../app/assets')],
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/assets/',
            outputPath: 'fonts/',
            useRelativePath: false
          }
        }
      },
      {
        test: /\.(png|jpg|gif|ico)$/,
        exclude: [path.resolve(__dirname, '../app/assets')],
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/assets/',
            outputPath: 'images/',
            useRelativePath: false
          }
        }
      },
      {
        test: /.*/,
        include: [path.resolve(__dirname, '../app/assets')],
        use: {
          loader: 'file-loader',
          options: {
            context: path.resolve(__dirname, '../app/assets'),
            name: '[path]/[name].[ext]'
          }
        }
      },
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader',
          options: {
            failOnWarning: false,
            failOnError: false
          }
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
};
