# extract-object

Extract text tokens from serializable object.

[![Build Status](https://travis-ci.org/cshum/extract-object.svg)](https://travis-ci.org/cshum/extract-object)

```
npm install extract-object
```

### extract(obj, [tokens])

Extract text tokens from serializable `obj`, optionally pass array `tokens` as reference.

```js
var extract = require('extract-object')

console.log(extract({
  a: 'foo bar',
  c: ['hello'],
  d: { asdf: { ghjk: 'world' } },
  e: 167,
  f: null
}))

// ['foo bar', 'hello', 'world']
```

## License

MIT
