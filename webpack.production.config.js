const config = require('./webpack.config.js');

config.entry = './src/Currency';

config.output.libraryTarget = 'commonjs2';

config.externals = [
  'react',
  'react-dom',
];

config.target = 'node';

module.exports = config;
