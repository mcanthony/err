const webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    path: './build',
    publicPath: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style!css', exclude: /node_modules/ },
      { test: /\.scss$/, loader: 'style!css!sass', exclude: /node_modules/ },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
      {
        test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader : 'file-loader'
      }
    ]
  },
  devtool: 'source-map',
};
