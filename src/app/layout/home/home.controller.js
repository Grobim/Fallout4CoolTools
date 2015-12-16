(function() {
  'use strict';

  angular.module('fallout4CoolTools.layout.main')
    .controller('HomeController', [
      '$intFirebaseObject',
      'F4ctAuth',
      'BiDirLocationNotes',
      'Locations',
      HomeController
    ])
  ;

  function HomeController(
    $intFirebaseObject,
    F4ctAuth,
    BiDirLocationNotes,
    Locations
  ) {
    var _this = this;

    _this.getIcon = getIcon;

    return init();

    function init() {
      _this.skillLevels = $intFirebaseObject(new BiDirLocationNotes(F4ctAuth.$getAuth().uid));
    }

    function getIcon(location) {
      return 'assets/images/locations/' + _.find(Locations, 'name', location).icon + '.svg';
    }

  }

})();
