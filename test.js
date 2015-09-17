var test = require('tape')
var extract = require('./')

var obj = {
  a: 'foo bar',
  c: ['hello'],
  d: { asdf: { ghjk: 'world' } },
  e: 167,
  f: null
}

test('extract', function (t) {
  t.deepEqual(extract(obj), [
    'foo bar', 'hello', 'world'
  ], 'text extraction from object')

  var stack = []
  extract(obj, stack)
  extract(obj, stack)
  t.deepEqual(stack, [
    'foo bar', 'hello', 'world',
    'foo bar', 'hello', 'world'
  ], 'stack as reference')

  obj.d.asdf.boom = obj
  t.throws(function () {
    extract(obj)
  }, 'Cycle detected', 'Cycle detected')

  t.end()
})
