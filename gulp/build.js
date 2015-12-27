(function() {
  'use strict';

  var path        = require('path'),
      gulp        = require('gulp'),
      conf        = require('./conf'),
      runSequence = require('run-sequence'),

      $ = require('gulp-load-plugins')({
        pattern : [
          'gulp-*',
          'main-bower-files',
          'uglify-save-license',
          'del'
        ]
      });

  gulp.task('partials', function () {
    return gulp.src([
        path.join(conf.paths.src, '/app/**/*.html'),
        path.join(conf.paths.tmp, '/serve/app/**/*.html')
      ])
      .pipe($.minifyHtml({
        empty  : true,
        spare  : true,
        quotes : true
      }))
      .pipe($.angularTemplatecache('templateCacheHtml.js', {
        module : 'fallout4CoolTools',
        root   : 'app'
      }))
      .pipe(gulp.dest(conf.paths.tmp + '/partials/'));
  });

  gulp.task('html', ['inject', 'partials'], html);

  gulp.task('html:test', ['inject:test', 'partials'], html);

  gulp.task('html:prod', ['inject:prod', 'partials'], html);

  function html() {
    var partialsInjectFile = gulp.src(path.join(conf.paths.tmp, '/partials/templateCacheHtml.js'), { read: false }),
        partialsInjectOptions = {
          starttag     : '<!-- inject:partials -->',
          ignorePath   : path.join(conf.paths.tmp, '/partials'),
          addRootSlash : false
        },

        htmlFilter = $.filter('*.html', { restore: true }),
        jsFilter = $.filter('**/!(*.spec|*.pre|*.mock).js', { restore: true }),
        cssFilter = $.filter('**/*.css', { restore: true }),
        assets;

    return gulp.src(path.join(conf.paths.tmp, '/serve/*.html'))
      .pipe($.inject(partialsInjectFile, partialsInjectOptions))
      .pipe(assets = $.useref.assets())
      .pipe($.rev())
      .pipe(jsFilter)
      .pipe($.ngAnnotate())
      .pipe($.uglify({ preserveComments: $.uglifySaveLicense })).on('error', conf.errorHandler('Uglify'))
      .pipe(jsFilter.restore)
      .pipe(cssFilter)
      .pipe($.minifyCss({ processImport: false }))
      .pipe(cssFilter.restore)
      .pipe(assets.restore())
      .pipe($.useref())
      .pipe($.revReplace())
      .pipe(htmlFilter)
      .pipe($.minifyHtml({
        empty        : true,
        spare        : true,
        quotes       : true,
        conditionals : true
      }))
      .pipe(htmlFilter.restore)
      .pipe(gulp.dest(path.join(conf.paths.dist, '/')))
      .pipe($.size({ title: path.join(conf.paths.dist, '/'), showFiles: true }))
    ;
  }

  // Only applies for fonts from bower dependencies
  // Custom fonts are handled by the "other" task
  gulp.task('fonts', function () {
    return gulp.src($.mainBowerFiles())
      .pipe($.filter('**/*.{eot,svg,ttf,woff,woff2}'))
      .pipe($.flatten())
      .pipe(gulp.dest(path.join(conf.paths.dist, '/fonts/')));
  });

  gulp.task('flags', function() {
    var fileFilter = $.filter(function (file) {
      return file.stat.isFile();
    });
    return gulp.src([
        path.join(conf.paths.src, '/**/{' + conf.langFlags.join(',') + '}.png')
      ])
      .pipe(fileFilter)
      .pipe(gulp.dest(path.join(conf.paths.dist, '/')))
    ;
  });

  gulp.task('other', function () {
    var fileFilter = $.filter(function (file) {
      return file.stat.isFile();
    });

    return gulp.src([
        path.join(conf.paths.src, '/**/*'),
        path.join('!' + conf.paths.src, '/**/lang/*'),
        path.join('!' + conf.paths.src, '/**/*.{html,css,js,scss}'),
        path.join('!' + conf.paths.src, '/assets/images/locations/*'),
        path.join('!' + conf.paths.src, '/assets/images/flags/**/*')
      ])
      .pipe(fileFilter)
      .pipe(gulp.dest(path.join(conf.paths.dist, '/')))
    ;
  });

  gulp.task('build', ['clean'], build());

  gulp.task('build:test', ['clean'], build('test'));

  gulp.task('build:prod', ['clean'], build('prod'));

  function build(env) {
    return function(callback) {
      runSequence(
        [
          (!!env) ? 'html:' + env : 'html',
          'fonts',
          'flags',
          'other',
          'locales:dist',
          'locationIcons:dist'
        ],
        callback
      );
    };
  }

})();
