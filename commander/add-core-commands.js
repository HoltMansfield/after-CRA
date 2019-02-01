const rek = require('rekuire')
const { bareBones } = rek('bare-bones')

const addCoreCommands = (program) => {
  program
    .command('bareBones')
    .description('Roll back to absolute minnimum react app')
    .action(() => {
      bareBones()
    })

  return program
}

module.exports = {
  addCoreCommands
}
