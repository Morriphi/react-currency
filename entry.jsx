const React = require('react');
const ReactDom = require('react-dom');
const Currency = require('./src/Currency');

ReactDom.render(<Currency symbol="£" vaue="1295" />, document.getElementById('component'));
