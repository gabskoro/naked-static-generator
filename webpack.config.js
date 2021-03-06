var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
     }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        use: [{
          loader: 'css-loader',
          options: {
            minimize: true,
            sourceMap: true
          }
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }],
        fallback: 'style-loader'
      })
    }, {
      test: /\.(jpg|png|svg)$/,
      use: 'file-loader'
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: 'file-loader'
    }]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'main.css'
    }),
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
};
