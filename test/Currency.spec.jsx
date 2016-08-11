const expect = require('chai').expect
const React = require('react')
const shallow = require('enzyme').shallow;
const Currency = require('../src/Currency');

describe('Currency', () => {
  it('renders', () => {
    expect(shallow(<Currency />).find('span')).to.have.length(1);
  })

  it('defaults to dollars', () => {
    expect(shallow(<Currency />).text()).to.match(/^\$/);
  })

  it('renders currency symbol', () => {
    expect(shallow(<Currency symbol="£" />).text()).to.match(/^£/);
    expect(shallow(<Currency symbol="$" />).text()).to.match(/^\$/);
    expect(shallow(<Currency symbol="€" />).text()).to.match(/^€/);
    expect(shallow(<Currency symbol="DoesntEvenHaveToBeASymbol" />).text())
      .to.match(/^DoesntEvenHaveToBeASymbol/);
  })
})
