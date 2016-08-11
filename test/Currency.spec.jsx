const expect = require('chai').expect
const React = require('react')
const shallow = require('enzyme').shallow;
const Currency = require('../src/Currency');

describe('Currency', () => {
  it('renders', () => {
    expect(shallow(<Currency />).find('span')).to.have.length(1);
  });

  it('defaults to dollars', () => {
    expect(shallow(<Currency />).text()).to.match(/^\$/);
  });

  it('renders currency symbol', () => {
    expect(shallow(<Currency symbol="£" />).text()).to.match(/^£/);
    expect(shallow(<Currency symbol="$" />).text()).to.match(/^\$/);
    expect(shallow(<Currency symbol="€" />).text()).to.match(/^€/);
    expect(shallow(<Currency symbol="DoesntEvenHaveToBeASymbol" />).text())
      .to.match(/^DoesntEvenHaveToBeASymbol/);
  });

  it('renders zero', () => {
    expect(shallow(<Currency />).text()).to.match(/0\.00$/);
    expect(shallow(<Currency value="" />).text()).to.match(/0\.00$/);
    expect(shallow(<Currency value="000" />).text()).to.match(/0\.00$/);
    expect(shallow(<Currency value="abc" />).text()).to.match(/0\.00$/);
    expect(shallow(<Currency value={null} />).text()).to.match(/0\.00$/);
    expect(shallow(<Currency value={undefined} />).text()).to.match(/0\.00$/);
  });

  it('renders whole numbers', () => {
    expect(shallow(<Currency value="10" />).text()).to.match(/0\.10$/);
    expect(shallow(<Currency value="20" />).text()).to.match(/0\.20$/);
    expect(shallow(<Currency value="120" />).text()).to.match(/1\.20$/);
    expect(shallow(<Currency value="230" />).text()).to.match(/2\.30$/);
    expect(shallow(<Currency value="1230" />).text()).to.match(/12\.30$/);
    expect(shallow(<Currency value="3210" />).text()).to.match(/32\.10$/);
    expect(shallow(<Currency value="91230" />).text()).to.match(/912\.30$/);
    expect(shallow(<Currency value="73210" />).text()).to.match(/732\.10$/);
    expect(shallow(<Currency value="343210" />).text()).to.match(/3,432\.10$/);
    expect(shallow(<Currency value="791343210" />).text()).to.match(/7,913,432\.10$/);
  });

  it('renders positive numbers black', () => {
    expect(shallow(<Currency value="10" />).html()).to.match(/style="color:#000000;"/);
  })

  it('renders negative numbers red', () => {
    expect(shallow(<Currency value="-10" />).html()).to.match(/style="color:#FF0000;"/);
  })
})
