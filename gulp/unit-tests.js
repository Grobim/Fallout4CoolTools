(function() {
  'use strict';

  var path = require('path'),
      gulp = require('gulp'),
      conf = require('./conf'),

      karma = require('karma'),

      pathSrcHtml = [
        path.join(conf.paths.src, '/**/*.html')
      ],

      pathSrcJs = [
        path.join(conf.paths.src, '/**/!(*.spec).js')
      ];

  function runTests (singleRun, done, file) {
    var reporters = ['progress'];
    var preprocessors = {};

    pathSrcHtml.forEach(function(path) {
      preprocessors[path] = ['ng-html2js'];
    });

    if (singleRun) {
      pathSrcJs.forEach(function(path) {
        preprocessors[path] = ['coverage'];
      });
      reporters.push('coverage');
    }

    var localConfig = {
      configFile    : path.join(__dirname, '/../' + (file || 'karma.conf.js')),
      singleRun     : singleRun,
      autoWatch     : !singleRun,
      reporters     : reporters,
      preprocessors : preprocessors
    };

    var server = new karma.Server(localConfig, function(failCount) {
      done(failCount ? new Error('Failed ' + failCount + ' tests.') : null);
    });
    server.start();
  }

  gulp.task('test', ['scripts'], function(done) {
    runTests(true, done);
  });

  gulp.task('test:dist', ['build'], function(done) {
    runTests(true, done, 'karma.conf.dist.js');
  });

  gulp.task('test:auto', ['watch:test'], function(done) {
    runTests(false, done);
  });

})();
