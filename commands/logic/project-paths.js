/*
  returns the actual project root when in CLI mode

    OR

  returns path to 'actual-files' when e-2-e testing
*/

const getProjectRoot = (commandDirName) => {
  //const directories = commandDirName.split('/')
  //const pathForTest = directories.slice(Math.max(directories.length - 3, 1)).join('/')

  //const test
  //const commandsTestRoot =
  //const testFilesRoot = `${__dirname}

  if (process.env.NODE_ENV === 'test') {

  }
}
module.exports = {
  getProjectRoot
}
