const { test } = require('mocha')

test('unhandled rejection', () => {
  Promise.reject('unhandled rejection')
})
