(function() {
  'use strict';

  var path = require('path'),
      gulp = require('gulp'),
      conf = require('./conf'),

      browserSync = require('browser-sync'),

      $ = require('gulp-load-plugins')();

  gulp.task('scripts-reload', function() {
    return buildScripts()
      .pipe(browserSync.stream());
  });

  gulp.task('scripts', ['preprocess'], function() {
    return buildScripts();
  });

  gulp.task('scripts:test', ['preprocess:test'], function() {
    return buildScripts();
  });

  gulp.task('scripts:prod', ['preprocess:prod'], function() {
    return buildScripts();
  });

  function buildScripts() {
    return gulp.src(path.join(conf.paths.src, '/app/**/*.js'))
      .pipe($.eslint())
      .pipe($.eslint.format())
      .pipe($.size());
  }

})();
