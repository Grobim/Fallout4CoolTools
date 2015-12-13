(function() {
  'use strict';

  angular.module('fallout4CoolTools.common')
    // @if NODE_ENV='development'
    .constant('FBURL', 'https://f4-cool-tools-dev.firebaseio.com')
    // @endif
    // @if NODE_ENV='production'
    .constant('FBURL', 'https://f4-cool-tools-dev.firebaseio.com')
    // @endif
    // @if NODE_ENV='test'
    .constant('FBURL', 'https://f4-cool-tools-dev.firebaseio.com')
    // @endif
  ;

})();
