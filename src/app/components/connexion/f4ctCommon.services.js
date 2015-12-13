(function() {
  'use strict';

  angular.module('fallout4CoolTools.common')
    .service('firebaseTime', firebaseTimeService)
  ;

  function firebaseTimeService($window) {
    return $window.Firebase.ServerValue.TIMESTAMP;
  }

})();
