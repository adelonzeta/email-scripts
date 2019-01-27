const gulp     = require('gulp')
const imagemin = require('gulp-imagemin')
const cwd      = { cwd: process.cwd() }

function Assets() {
  return gulp.src('assets/**/*', cwd)
    .pipe(imagemin())
    .pipe(gulp.dest('build/assets', cwd))
}

module.exports = Assets