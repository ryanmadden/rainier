'use strict';
// Vars
var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

// Sass Development
gulp.task('sass', function () {
  gulp.src('./src/sass/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('./dev/'))
});

// JS Development
gulp.task('scripts', function() {
  gulp.src('./src/js/*.js')
  .pipe(concat('rainier.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./dev/'));
});

// Dev Watch Task
gulp.task('default', function () {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
  gulp.watch('./src/js/**/*.js', ['scripts']);
});

// Build for Production
gulp.task('build', function () {
  gulp.src('./src/sass/**/*.scss')
    // .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cssnano())
    .pipe(concat('rainier.min.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/'));

    gulp.src('./src/js/*.js')
    .pipe(concat('rainier.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'));
  });