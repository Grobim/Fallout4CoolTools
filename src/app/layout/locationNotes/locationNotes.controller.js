(function() {
  'use strict';

  angular.module('fallout4CoolTools.layout.locationNotes')
    .controller('LocationNotesController', [
      '$scope',
      '$intFirebaseObject',
      'paginationService',
      'DialogsService',
      'F4ctAuth',
      'LocationNotes',
      'LocationNote',
      'Locations',
      LocationNotesController
    ])
  ;

  function LocationNotesController(
    $scope,
    $intFirebaseObject,
    paginationService,
    DialogsService,
    F4ctAuth,
    LocationNotes,
    LocationNote,
    Locations
  ) {

    var _this = this;

    _this.getIconStyle = getIconStyle;
    _this.onQueryChange = onQueryChange;

    _this.editComment = editComment;
    _this.deleteComment = deleteComment;

    _this.hasComment = hasComment;

    return init();

    function init() {
      _this.listConfig = {
        limit : 10,
        order : 'name'
      };
      _this.userId = F4ctAuth.$getAuth().uid;
      _this.userComments = $intFirebaseObject(new LocationNotes(_this.userId));
      _this.userComments.$loaded(function() {
        _this.locations = paginationService.onQueryChange(Locations, _this.listConfig);
      });
    }

    function getIconStyle(location) {
      var style = {};

      if (hasComment(location)) {
        style.fill = 'red';
      }

      return style;
    }

    function onQueryChange() {
      _this.locations = paginationService.onQueryChange(Locations, _this.listConfig);
    }

    function editComment(location, $event) {
      $intFirebaseObject(new LocationNote(_this.userId, location.name)).$loaded(function(locNote) {
        DialogsService.editLocationCommentDialog(locNote, $event);
      });
    }

    function deleteComment(location, $event) {
      DialogsService.confirmDeleteCommentDialog($event).then(function() {
        $intFirebaseObject(new LocationNote(_this.userId, location.name)).$remove();
      });
    }

    function hasComment(location) {
      return _this.userComments[location.name] && _this.userComments[location.name].length;
    }

  }

})();
