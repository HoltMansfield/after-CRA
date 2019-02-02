const copy = require('recursive-copy')
// const Promise = require('bluebird')
// const rimraf = require('rimraf')
//
//
// const deleteFolder = Promise.promisify(rimraf)
const options = {
  overwrite: true,
  dot: true
}

const initializeTest = async (testPath) => {
  const directories = testPath.split('/')
  const pathForTest = directories.slice(Math.max(directories.length - 3, 1)).join('/')
  const destination = `${__dirname}/${pathForTest}/actual-files`
  const expectedPath = `${__dirname}/${pathForTest}/expected-files`
  const source = `${__dirname}/after-cra`

  // clear the actual folder from any previous tests
  //await deleteFolder(destination)

  return new Promise((resolve, reject) => {
    copy(source, destination, options, (err) => {
      if (err) {
        reject(err)
      }

      resolve({
        expectedPath: expectedPath,
        actualPath: destination
      })
    })
  })
}

module.exports = {
  initializeTest
}
