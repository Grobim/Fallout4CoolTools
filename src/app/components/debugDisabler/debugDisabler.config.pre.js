(function() {
  'use strict';

  angular.module('fallout4CoolTools.components.debugDisabler')
    .config(['$compileProvider', '$logProvider', debugDisablerConfig])
  ;

  function debugDisablerConfig($compileProvider, $logProvider) {
    // @if NODE_ENV='production'
    $compileProvider.debugInfoEnabled(false);
    $logProvider.debugEnabled(false);
    // @endif
  }

})();
