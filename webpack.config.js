var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',
  entry: './scripts/app.js',

  output: {
    filename: 'bundle.js',
    path: __dirname + '/build',
    publicPath: 'http://localhost:2016/build/'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query:{ presets:['react'] }
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  }
};
