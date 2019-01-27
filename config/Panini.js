const gulp   = require('gulp')
const panini = require('panini')
const inky   = require('inky')
const cwd    = { cwd: process.cwd() }

function Panini() {
  return gulp.src('pages/**/*.html', cwd)
    .pipe(panini({
      root     : 'pages',
      layouts  : 'layouts',
      partials : 'partials',
      helpers  : 'helpers',
      data     : 'data'
    }))
    .pipe(inky())
    .pipe(gulp.dest('build', cwd))
}

module.exports = Panini