const browser   = require('browser-sync').create('Server')
const buildDir  = process.cwd() + '/build'
const assetsDir = process.cwd() + '/assets'

function Serve(done) {
  browser.init({
    server: [buildDir, assetsDir]
  })
  done()
}

module.exports = Serve