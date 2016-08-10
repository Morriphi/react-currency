# React Currency
A react component for rendering whole numbers as currency

### run tests
```
npm test
```

### running development setup locally
```
npm run dev
```
then visit localhost:8080

### building bundle file for webpack
```
npm run build
```

### publish to npm
Update the version number in package.json
Make sure webpack.production.config.js contains the correct reference to exported entrypoint then
```npm publish```

### Consume in project
Install via npm
```
npm install react-currency --save
```

#### Server render
```
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const currency = require('react-currency');

const html = ReactDOMServer.renderToString(currency({symbol: "$", value: "100"}));
```

#### Client render
```
const React = require('react');
const ReactDom = require('react-dom');
const Currency = require('react-currency');

ReactDom.render(<Currency symbol="$" value="100" /> document.getElementById('currency'));
```
