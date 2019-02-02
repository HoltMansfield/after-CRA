const rek = require('rekuire')
const messages = rek('messages')
const dirCompare = require('dir-compare')
const format = require('util').format


const options = { compareSize: true }
const states = { 'equal' : '==', 'left' : '->', 'right' : '<-', 'distinct' : '<>' }

const compareDirectories = (expectedPath, actualPath) => {
  const res = dirCompare.compareSync(expectedPath, actualPath, options)

  if (res.differences > 0) {
    res.diffSet.forEach(function (entry) {
      var state = states[entry.state]
      var name1 = entry.name1 ? entry.name1 : ''
      var name2 = entry.name2 ? entry.name2 : ''
      messages.paragraph(format('%s(%s)%s%s(%s)', name1, entry.type1, state, name2, entry.type2))
    })

    return false
  }

  return true
}

module.exports = compareDirectories
