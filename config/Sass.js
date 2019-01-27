const gulp       = require('gulp')
const sass       = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const cwd        = { cwd: process.cwd() }

function Sass() {
  return gulp.src('styles/styles.scss', cwd)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/css', cwd))
}

module.exports = Sass
