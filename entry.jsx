const React = require('react');
const ReactDom = require('react-dom');
const Currency = require('./src/Currency');

const Page = () => (
  <ul>
    <li><Currency /></li>
    <li><Currency value={undefined} /></li>
    <li><Currency value={null} /></li>
    <li><Currency value="120"/></li>
    <li><Currency symbol="£" value="230"/></li>
    <li><Currency symbol="€" value="1230"/></li>
    <li><Currency symbol="$" value="3210"/></li>
    <li><Currency symbol="¥" value="91230"/></li>
    <li><Currency symbol="€" value="73210"/></li>
    <li><Currency symbol="£" value="3432.10"/></li>

    <li><Currency value="-120"/></li>
    <li><Currency symbol="£" value="-230"/></li>
    <li><Currency symbol="€" value="-1230"/></li>
    <li><Currency symbol="$" value="-32.10"/></li>
    <li><Currency symbol="¥" value="-91230"/></li>
    <li><Currency symbol="€" value="-73210"/></li>
    <li><Currency symbol="£" value="-343210"/></li>
  </ul>
);

ReactDom.render(<Page />, document.getElementById('component'));
