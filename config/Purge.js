const gulp     = require('gulp')
const purgecss = require('gulp-purgecss')
const cwd      = { cwd: process.cwd() }
const html     = process.cwd() + '/build/*.html'

function Purge() {
  return gulp.src('build/css/styles.css', cwd)
    .pipe(purgecss({
      content: [html]
    }))
    .pipe(gulp.dest('build/css', cwd))
}

module.exports = Purge