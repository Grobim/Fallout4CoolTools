(function() {
  'use strict';

  angular.module('fallout4CoolTools.layout.main')
    .controller('HomeController', [
      '$scope',
      '$intFirebaseObject',
      'F4ctAuth',
      'BiDirLocationNotes',
      'Locations',
      HomeController
    ])
  ;

  function HomeController(
    $scope,
    $intFirebaseObject,
    F4ctAuth,
    BiDirLocationNotes,
    Locations
  ) {
    var _this = this,
        authListener,
        auth;

    _this.getIcon = getIcon;

    authListener = F4ctAuth.$onAuth(function() {
      init();
    });

    $scope.$on('$destroy', function() {
      authListener();
    });

    return init();

    function init() {
      auth = F4ctAuth.$getAuth();

      if (auth) {
        _this.skillLevels = $intFirebaseObject(new BiDirLocationNotes(auth.uid));
      } else {
        _this.skillLevels = null;
      }
    }

    function getIcon(location) {
      return _.find(Locations, 'name', location).icon;
    }

  }

})();
