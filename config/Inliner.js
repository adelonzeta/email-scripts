const gulp      = require('gulp')
const inlineCSS = require('gulp-inline-css')
const siphon    = require('siphon-media-query')
const replace   = require('gulp-replace')
const htmlmin   = require('gulp-htmlmin')
const fs        = require('fs')
const file      = process.cwd() + '/config.json'
let CONFIG      = { assets: '' }
const cwd       = { cwd: process.cwd() }

if (fs.existsSync(file)) CONFIG = JSON.parse(fs.readFileSync(file))

function Inliner() {
  const css = fs.readFileSync(process.cwd() + '/build/css/styles.css').toString()
  const mqCss = siphon(css)

  return gulp.src('build/**/*.html', cwd)
    .pipe(inlineCSS({
      preserveMediaQueries: true,
      applyWidthAttributes: true,
      applyTableAttributes: true
    }))
    .pipe(replace('<!-- <style> -->', `<style>${mqCss}</style>`))
    .pipe(replace('src="', `src="${CONFIG.assets}`))
    .pipe(replace('rel="icon" href="', `rel="icon" href="${CONFIG.assets}`))
    .pipe(htmlmin({
      collapseWhitespace: true,
      conservativeCollapse: true,
      minifyCSS: true
    }))
    .pipe(gulp.dest('build', cwd))
}

module.exports = Inliner