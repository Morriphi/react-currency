const React = require('react');

const color = (value) => Number(value) < 0 ? '#FF0000' : '#000000'

module.exports = ({value, symbol = '$'}) => (<span style={{color: color(value)}}>{symbol + (isNaN(value) ? '0.00' :
  new Intl.NumberFormat('en-IN',
    { minimumFractionDigits: 2, maximumFractionDigits: 2 }
  ).format(Number(value) / 100))}</span>);
