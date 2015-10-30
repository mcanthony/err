const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: ['webpack/hot/dev-server', './src/main.js']
  },
  output: {
    path: './public/built',
    publicPath: 'http://localhost:8080/built',
    filename: 'bundle.js'
  },
  devServer: {
    hot: true,
    contentBase: './public',
    publicPath: 'http://localhost:8080/built'
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
  plugins: [ new webpack.HotModuleReplacementPlugin() ]
};
