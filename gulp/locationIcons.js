(function() {
  'use strict';

  var gulp      = require('gulp'),
      svgSprite = require('gulp-svg-sprite'),
      path      = require('path'),
      conf      = require('./conf');

  gulp.task('locationIcons', function() {
    return locationIcons(path.join(conf.paths.tmp, '/serve/locationIcons'));
  });

  gulp.task('locationIcons:dist', function() {
    return locationIcons(path.join(conf.paths.dist, '/locationIcons'));
  });

  function locationIcons(targetFolder) {
    return gulp.src(path.join(conf.paths.src, '/assets/images/locations/*.svg'))
      .pipe(svgSprite({
        mode : {
          defs : {
            dest   : '',
            sprite : 'locationIcons.svg'
          }
        }
      }))
      .pipe(gulp.dest(targetFolder));
  }

})();
