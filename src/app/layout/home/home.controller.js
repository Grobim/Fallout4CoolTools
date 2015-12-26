(function() {
  'use strict';

  angular.module('fallout4CoolTools.layout.main')
    .controller('HomeController', [
      '$scope',
      '$intFirebaseObject',
      'F4ctAuth',
      'BiDirLocationNotes',
      'LocationNote',
      'Locations',
      HomeController
    ])
  ;

  function HomeController(
    $scope,
    $intFirebaseObject,
    F4ctAuth,
    BiDirLocationNotes,
    LocationNote,
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

        _this.skillLevels.$watch(function() {

          if (_this.skillLevels.notes) {
            _.forOwn(_this.skillLevels.notes, function(value, key) {
              _this.skillLevels.notes[key] = $intFirebaseObject(new LocationNote(auth.uid, key));
            });
          }

        });

      } else {

        _this.skillLevels = null;

      }
    }

    function getIcon(location) {
      return _.find(Locations, 'name', location).icon;
    }

  }

})();
