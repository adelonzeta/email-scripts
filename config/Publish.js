const ghpages = require('gh-pages')

function Publish(done) {
  ghpages.publish(process.cwd() + '/build')
  done()
}

module.exports = Publish