const { test } = require('mocha')

test('unhandled rejection', async () => {
  const promise = Promise.reject(new Error('unhandled rejection'))
  await new Promise(resolve => setTimeout(resolve, 100))
  promise.catch(() => {})
})
