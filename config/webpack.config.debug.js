var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, ".."),
  entry: './ts/src/index.ts',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: ['.', 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          'ts-loader'
        ]
      }
    ]
  },
  devtool: 'source-map'
}
