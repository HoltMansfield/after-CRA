const rek = require('rekuire')
const projectPaths = rek('project-paths')


const bareBones = () => {
  // const root = projectPaths.getProjectRoot(__dirname)
  //
  // return new Promise((resolve) => {
  //   resolve('mama')
  // })
  console.log('DIR NAME')
  console.log(__dirname)
  console.log('cwd()')
  console.log(process.cwd())
  console.log('the end')

  return true
}

module.exports = {
  bareBones
}
