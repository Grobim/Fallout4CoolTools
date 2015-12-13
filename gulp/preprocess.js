(function() {
  'use strict';

  var path = require('path'),
      gulp = require('gulp'),
      conf = require('./conf'),

      $ = require('gulp-load-plugins')();

  gulp.task('preprocess', ['preprocess:dev']);

  gulp.task('preprocess:dev', function() {
    return preprocess();
  });

  gulp.task('preprocess:test', function() {
    return preprocess('test');
  });

  gulp.task('preprocess:prod', function() {
    return preprocess('production');
  });

  function preprocess(target) {
    var context;
    if (target) {
      context = {
        context : {
          NODE_ENV: target
        }
      };
    }
    return gulp.src(path.join(conf.paths.src, '/app/**/*.pre.js'))
      .pipe($.preprocess(context))
      .pipe($.rename(function(path) {
        path.basename = path.basename.slice(0, -4);
      }))
      .pipe(gulp.dest(path.join(conf.paths.src, 'app')));
  }

})();
