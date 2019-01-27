const del = require('del')
const cwd = { cwd: process.cwd() }

function Clean(done) {
  del('build/css/', cwd)
  done()
}

module.exports = Clean