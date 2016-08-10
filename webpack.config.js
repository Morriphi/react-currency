module.exports = {
  entry: './entry',
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  output: {
    path: __dirname,
    filename: 'dist/bundle.js',
    library: 'Currency'
  },
  module: {
    loaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
};
