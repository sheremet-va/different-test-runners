const { test } = require('mocha')

test('unhandled rejection', async () => {
  Promise.reject('unhandled rejection')
  await new Promise(resolve => setTimeout(resolve, 100))
})
