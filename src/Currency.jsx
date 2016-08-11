const React = require('react')

const Currency = React.createClass({
  getDefaultProps() {
    return {
      symbol: '$'
    }
  },

  render () {
    return (<span>{this.props.symbol}</span>
    )
  }
})

module.exports = Currency
