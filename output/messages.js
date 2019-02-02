const chalk = require('chalk')
/* eslint-disable-next-line no-console  */
const log = console.log


const info = (content) => {
  log(chalk.blue(content))
}

const paragraph = (content) => {
  log(chalk.underline.bgBlue(content))
}

module.exports = {
  info,
  paragraph
}
