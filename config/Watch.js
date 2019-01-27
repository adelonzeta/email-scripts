const { watch, series } = require('gulp')
const Panini  = require('./Panini')
const Sass    = require('./Sass')
const Refresh = require('./Refresh')
const Reload  = require('./Reload')

const sassFiles    = process.cwd() + '/styles/**/*.scss'
const paniniFiles  = process.cwd() + '/{data,helpers,layouts,pages,partials}/**/*'
const asssetsFiles = process.cwd() + '/assets/**/*'

function Watch() {
  watch(sassFiles, series(Sass, Reload))
  watch(paniniFiles, series(Refresh, Panini, Reload))
  watch(asssetsFiles, Reload)
}

module.exports = Watch