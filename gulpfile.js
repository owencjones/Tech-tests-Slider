'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const serve = require('gulp-serve');

// Generate styles from SASS
gulp.task('styles', function () {
 return gulp.src('./sass/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./css'));
});

gulp.task('watch', () => {
    gulp.watch('sass/**/*.scss', ['styles']);
});

gulp.task('serve', serve('.'));

gulp.task('watchserve', ['watch', 'serve']);
