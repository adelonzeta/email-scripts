const del = require('del')

function Prepare(done) {
  del(process.cwd() + '/build/**/*')
  done()
}

module.exports = Prepare