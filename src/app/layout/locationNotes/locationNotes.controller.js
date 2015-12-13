(function() {
  'use strict';

  angular.module('fallout4CoolTools.layout.locationNotes')
    .controller('LocationNotesController', [
      '$scope',
      '$intFirebaseObject',
      'LocationNote',
      LocationNotesController
    ])
  ;

  function LocationNotesController(
    $scope,
    $intFirebaseObject,
    LocationNote
  ) {
    var _this = this;

    _this.test = $intFirebaseObject(new LocationNote('e8a1e7ba-c744-4f14-b480-1c45e04a4af9'));

  }

})();
