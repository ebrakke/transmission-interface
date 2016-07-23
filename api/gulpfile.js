'use strict';
const gulp = require('gulp');
const eslint = require('gulp-eslint');
const gls = require('gulp-live-server');

gulp.task('lint', () => {
  return gulp.src(['**/*.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('serve', ['lint'], () => {
  let server = gls('app.js', { env: {NODE_ENV: 'dev'}});
  server.start();
});

gulp.task('dev', ['serve']);
