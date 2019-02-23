var gulp = require('gulp');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var deploy = require('gulp-gh-pages');

// File paths
var DIST_PATH = 'public/dist/';
var SCRIPTS_PATH = 'public/scripts/**/*.js';
var SCSS_PATH = 'public/scss/**/*.scss';
var IMAGES_PATH = 'public/images/**/*.{svg}';

// Styles SCSS
gulp.task('styles', function () {
  console.log('starting styles task');
  return gulp.src('public/scss/styles.scss')
    .pipe(plumber(function (error) {
      console.log('Styles Task Error');
      console.log(error);
      this.emit('end');
    }))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(DIST_PATH))
    .pipe(livereload());
});

// Scripts
gulp.task('scripts', function () {
  console.log('starting scripts task');
  return gulp.src(SCRIPTS_PATH)
    .pipe(plumber(function (error) {
      console.log('Scripts Task Error');
      console.log(error);
      this.emit('end');
    }))
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(DIST_PATH))
    .pipe(livereload());
});

// Watch
gulp.task('watch', function() {
  console.log('starting watch task');
  require('./server.js');
  livereload.listen();
  gulp.watch(SCRIPTS_PATH, gulp.series('scripts'));
  gulp.watch(SCSS_PATH, gulp.series('styles'));
});

// Deploy
gulp.task('deploy', function () {
  return gulp.src("./public/dist/**/*")
    .pipe(deploy())
});