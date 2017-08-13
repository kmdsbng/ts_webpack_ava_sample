var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, '..'),
  entry: './ts/src/index.ts',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: ['.', 'ts/src/', 'node_modules']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}

