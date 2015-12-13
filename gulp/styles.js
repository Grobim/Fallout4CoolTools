(function() {
  'use strict';

  var path = require('path'),
      gulp = require('gulp'),
      conf = require('./conf'),

      browserSync = require('browser-sync'),

      $ = require('gulp-load-plugins')(),

      wiredep = require('wiredep').stream,
      _ = require('lodash');

  gulp.task('styles-reload', ['styles'], function() {
    return buildStyles()
      .pipe(browserSync.stream());
  });

  gulp.task('styles', function() {
    return buildStyles();
  });

  function buildStyles() {
    var sassOptions = {
      style: 'expanded'
    };

    var injectFiles = gulp.src([
      path.join(conf.paths.src, '/app/**/*.scss'),
      path.join('!' + conf.paths.src, '/app/main.scss')
    ], { read: false });

    var injectOptions = {
      transform: function(filePath) {
        filePath = filePath.replace(conf.paths.src + '/app/', '');
        return '@import "' + filePath + '";';
      },
      starttag: '// injector',
      endtag: '// endinjector',
      addRootSlash: false
    };


    return gulp.src([
      path.join(conf.paths.src, '/app/main.scss')
    ])
    .pipe($.inject(injectFiles, injectOptions))
    .pipe(wiredep(_.extend({}, conf.wiredep)))
    .pipe($.sass(sassOptions)).on('error', conf.errorHandler('Sass'))
    .pipe($.autoprefixer()).on('error', conf.errorHandler('Autoprefixer'))
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app/')));
  }

})();
