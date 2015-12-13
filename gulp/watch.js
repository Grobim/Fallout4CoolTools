(function() {
  'use strict';

  var path = require('path'),
      gulp = require('gulp'),
      conf = require('./conf'),

      browserSync = require('browser-sync');

  gulp.task('watch', ['inject', 'locales'], function() {

    gulp.watch([path.join(conf.paths.src, '/*.html'), 'bower.json'], ['inject-reload']);

    gulp.watch([
      path.join(conf.paths.src, '/app/**/*.css'),
      path.join(conf.paths.src, '/app/**/*.scss')
    ], function(event) {
      if(isOnlyChange(event)) {
        gulp.start('styles-reload');
      } else {
        gulp.start('inject-reload');
      }
    });

    gulp.watch(path.join(conf.paths.src, '/app/**/!(*.spec|*.pre).js'), function(event) {
      if(isOnlyChange(event)) {
        gulp.start('scripts-reload');
      } else {
        gulp.start('inject-reload');
      }
    });

    gulp.watch(path.join(conf.paths.src, '/app/**/*.html'), function(event) {
      browserSync.reload(event.path);
    });

    gulp.watch(path.join(conf.paths.src, '/app/**/lang/*.json'), ['locales-reload']);

  });

  gulp.task('watch:test', ['scripts'], function() {

    gulp.watch(path.join(conf.paths.src, '/app/**/*.js'), function() {
        gulp.start('scripts-reload');
    });

  });

  function isOnlyChange(event) {
    return event.type === 'changed';
  }

})();
