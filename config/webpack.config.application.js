const webpack           = require('webpack');
const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
      actions: path.resolve(__dirname, '../app/actions/'),
      assets: path.resolve(__dirname, '../app/assets/'),
      components: path.resolve(__dirname, '../app/components/'),
      constants: path.resolve(__dirname, '../app/constants/'),
      containers: path.resolve(__dirname, '../app/containers/'),
      reducers: path.resolve(__dirname, '../app/reducers/'),
      store: path.resolve(__dirname, '../app/store/'),
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