const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: [path.join(__dirname, '../../app/index.js')],
  output: { filename: 'js/[name].js' },
  devServer: {
    contentBase: path.resolve(__dirname, '../../dist'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    overlay: {
      warnings: false,
      errors: true
    },
    port: 3333
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(sass|scss)$/,
        include: path.resolve(__dirname, '../../app/stylesheets'),
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.(sass|scss)$/,
        exclude: path.resolve(__dirname, '../../app/stylesheets'),
        use: [
          'style-loader',
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
      }
    ]
  }
}
