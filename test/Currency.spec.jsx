const expect = require('chai').expect
const React = require('react')
const shallow = require('enzyme').shallow;
const Currency = require('../src/Currency');

describe('Currency', () => {
  it('renders', () => {
    const props = {
      searchTerm: ''
    }
    const wrapper = shallow(<Currency {...props} />)
    expect(wrapper.find('span')).to.have.length(1)
  })
})
