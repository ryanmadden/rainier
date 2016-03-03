'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss      = require('gulp-postcss');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  gulp.src('./sass/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default',['sass:watch']);