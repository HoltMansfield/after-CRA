import test from 'ava'
const rek = require('rekuire')
const testSetup = rek('test-setup')
const compareDirectories = rek('compare-directories')


// import module under test last so it receives testdoubles
const { bareBones } = rek('bare-bones')


test('removes any demo content', async t => {
  const { expectedPath, actualPath } = await testSetup.initializeTest(`${__dirname}`)

  // run the actual command
  await bareBones()

  const result = compareDirectories(expectedPath, actualPath)

  t.is(result, true)
})
