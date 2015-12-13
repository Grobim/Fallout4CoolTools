(function() {
  'use strict';

  var gulp = require('gulp'),
      path = require('path'),
      conf = require('./conf'),

      extend = require('gulp-extend'),
      filter = require('gulp-filter'),

      browserSync = require('browser-sync'),

      langs = ['en', 'fr'];

  gulp.task('locales', function() {
    return locales(path.join(conf.paths.tmp, '/serve/langs'));
  });

  gulp.task('locales-reload', ['locales'], function() {
    browserSync.reload();
  });

  gulp.task('locales:dist', function() {
    return locales(path.join(conf.paths.dist, '/langs'));
  });

  function locales(targetFolder) {

    var chain = gulp.src(langs.map(function(lang) {
        return path.join(conf.paths.src, '/**/lang/' + lang + '.json');
      }));
    for (var i = 0; i < langs.length; ++i) {
      var lang = langs[i],
          langFilter = filter('**/' + lang + '.json', {restore: true});
      chain = chain.pipe(langFilter)
      .pipe(extend(lang + '.json'))
      .pipe(langFilter.restore);
    }
    return chain.pipe(gulp.dest(targetFolder));
  }

})();
