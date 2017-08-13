var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, ".."),
  entry: './ts/index.ts',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  },
  devtool: 'source-map'
}