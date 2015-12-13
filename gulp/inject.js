(function() {
  'use strict';

  var path = require('path'),
      gulp = require('gulp'),
      conf = require('./conf'),

      $ = require('gulp-load-plugins')(),

      wiredep = require('wiredep').stream,
      _ = require('lodash'),

      browserSync = require('browser-sync');

  gulp.task('inject-reload', ['inject'], function() {
    browserSync.reload();
  });

  gulp.task('inject', ['scripts', 'styles'], function () {
    return inject();
  });

  gulp.task('inject:test', ['scripts:test', 'styles'], function () {
    return inject();
  });

  gulp.task('inject:prod', ['scripts:prod', 'styles'], function () {
    return inject();
  });

  function inject() {
    var injectStyles = gulp.src([
      path.join(conf.paths.tmp, '/serve/app/**/*.css'),
      path.join('!' + conf.paths.tmp, '/serve/app/vendor.css')
    ], { read: false });

    var injectScripts = gulp.src([
      path.join(conf.paths.src, '/app/**/*.module.js'),
      path.join(conf.paths.src, '/app/**/*.js'),
      path.join('!' + conf.paths.src, '/app/**/*.pre.js'),
      path.join('!' + conf.paths.src, '/app/**/*.spec.js'),
      path.join('!' + conf.paths.src, '/app/**/*.mock.js'),
    ])
    .pipe($.angularFilesort()).on('error', conf.errorHandler('AngularFilesort'));

    var injectOptions = {
      ignorePath: [conf.paths.src, path.join(conf.paths.tmp, '/serve')],
      addRootSlash: false
    };

    return gulp.src(path.join(conf.paths.src, '/*.html'))
      .pipe($.inject(injectStyles, injectOptions))
      .pipe($.inject(injectScripts, injectOptions))
      .pipe(wiredep(_.extend({}, conf.wiredep)))
      .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve')));
  }

})();
