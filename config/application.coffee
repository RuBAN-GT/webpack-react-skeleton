webpack           = require('webpack')
path              = require('path')
ExtractTextPlugin = require('extract-text-webpack-plugin')
HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports =
  entry:
    app: path.join(__dirname, '../app/app.js')
    vendor: path.join(__dirname, '../app/vendor.js')

  output:
    filename: 'js/[name].js'
    path: path.resolve(__dirname, '../public/assets')
    publicPath: '/assets/'

  resolve: alias: vendor: path.resolve(__dirname, '../vendor/')

  plugins: [
    new HtmlWebpackPlugin
      template: 'app/index.html'
      inject: 'body'
      filename: path.join('../index.html')

    new webpack.optimize.CommonsChunkPlugin
      name: 'vendor'
      children: true

    new ExtractTextPlugin('css/app.css')

    new webpack.LoaderOptionsPlugin
      options: postcss: [ require('autoprefixer') ]
  ]

  module: rules: [
    {
      test: /\.(woff|woff2|eot|otf|ttf|svg)$/
      exclude: [ path.resolve(__dirname, '../app/assets') ]
      use:
        loader: 'file-loader'
        options:
          publicPath: '/assets/'
          outputPath: 'fonts/'
          useRelativePath: false
    }
    {
      test: /\.(png|jpg|gif|ico)$/
      exclude: [ path.resolve(__dirname, '../app/assets') ]
      use:
        loader: 'file-loader'
        options:
          publicPath: '/assets/'
          outputPath: 'images/'
          useRelativePath: false
    }
    {
      test: /\.(png|jpg|gif|ico|woff|woff2|eot|otf|ttf|svg)$/
      include: [ path.resolve(__dirname, '../app/assets') ]
      use:
        loader: 'file-loader'
        options:
          context: path.resolve(__dirname, '../app/assets')
          name: '[path]/[name].[ext]'
    }
    {
      test: /\.(sass|scss)$/
      use: ExtractTextPlugin.extract
        use: [ 'css-loader', 'postcss-loader', 'sass-loader' ]
    }
    {
      enforce: 'pre'
      test: /\.(js|jsx)$/
      exclude: /node_modules/,
      use:
        loader: 'eslint-loader'
        options:
          failOnWarning: false
          failOnError: false
    }
    {
      test: /\.(js|jsx)$/
      exclude: /node_modules/,
      use:
        loader: 'babel-loader'
        options: presets: [ 'es2015', 'react', 'env' ]
    }
  ]
