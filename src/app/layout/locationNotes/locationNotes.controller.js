(function() {
  'use strict';

  angular.module('fallout4CoolTools.layout.locationNotes')
    .controller('LocationNotesController', [
      '$scope',
      '$intFirebaseObject',
      'paginationService',
      'F4ctAuth',
      'LocationNote',
      'Locations',
      LocationNotesController
    ])
  ;

  function LocationNotesController(
    $scope,
    $intFirebaseObject,
    paginationService,
    F4ctAuth,
    LocationNote,
    Locations
  ) {

    var _this = this;

    _this.getIconStyle = getIconStyle;
    _this.onQueryChange = onQueryChange;

    return init();

    function init() {
      _this.listConfig = {
        limit : 10
      };
      _this.userComments = $intFirebaseObject(new LocationNote(F4ctAuth.$getAuth().uid));
      _this.userComments.$loaded(function() {
        _this.locations = paginationService.onQueryChange(Locations, _this.listConfig);
      });
    }

    function getIconStyle(location) {
      var style = {};

      if (_this.userComments[location.name] && _this.userComments[location.name].length) {
        style.fill = 'red';
      }

      return style;
    }

    function onQueryChange() {
      _this.locations = paginationService.onQueryChange(Locations, _this.listConfig);
    }

  }

})();
