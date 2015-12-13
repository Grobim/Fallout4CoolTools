(function() {
  'use strict';

  angular.module('fallout4CoolTools.common')
    .factory('F4ctRootRef', ['$window', 'FBURL', F4ctRootRef])
    .factory('F4ctAuth', ['$firebaseAuth', 'F4ctRootRef', F4ctAuth])
    ;

  function F4ctRootRef($window, FBURL) {
    return new $window.Firebase(FBURL);
  }

  function F4ctAuth($firebaseAuth, F4ctRootRef) {
    return $firebaseAuth(F4ctRootRef);
  }

})();
