const webpack = require('webpack')
const path = require('path')

const CleanPlugin = require('clean-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const HarddiskPlugin = require('html-webpack-harddisk-plugin')

module.exports = {
  output: {
    path: path.resolve(__dirname, '../../dist/assets'),
    publicPath: '/assets/'
  },
  resolve: {
    alias: {
      root: path.resolve(__dirname, '../../app/'),
      assets: path.resolve(__dirname, '../../app/assets/'),
      stylesheets: path.resolve(__dirname, '../../app/stylesheets/'),
      vendor: path.resolve(__dirname, '../../app/vendor/')
    },
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new CleanPlugin(['dist/assets'], {
      root: path.resolve(__dirname, '../../')
    }),
    new HtmlPlugin({
      alwaysWriteToDisk: true,
      filename: path.join('../index.html'),
      inject: 'body',
      template: path.join(__dirname, '../../app/index.html')
    }),
    new HarddiskPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(woff(2)?|eot|otf|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        exclude: [path.resolve(__dirname, '../../app/assets')],
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
        test: /\.(png|jpg(eg)?|gif|ico)$/,
        exclude: [path.resolve(__dirname, '../../app/assets')],
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
        include: [path.resolve(__dirname, '../../app/assets')],
        use: {
          loader: 'file-loader',
          options: {
            context: path.resolve(__dirname, '../../app/assets'),
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
            failOnError: true
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
}
