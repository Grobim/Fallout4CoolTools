(function() {
  'use strict';

  angular.module('fallout4CoolTools.layout.locationNotes')
    .controller('LocationNotesController', [
      '$scope',
      '$intFirebaseObject',
      'paginationService',
      'LocationNotesService',
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
    LocationNotesService,
    DialogsService,
    F4ctAuth,
    LocationNotes,
    LocationNote,
    Locations
  ) {

    var _this = this;

    _this.getIconClass = getIconClass;
    _this.onQueryChange = onQueryChange;

    _this.editComment = editComment;
    _this.deleteComment = deleteComment;

    _this.hasComment = hasComment;
    _this.isConnected = isConnected;

    return init();

    function init() {
      var auth = F4ctAuth.$getAuth();

      _this.listConfig = {
        limit : 10,
        order : 'name'
      };
      if (auth) {
        _this.userId = auth.uid;
        _this.userComments = $intFirebaseObject(new LocationNotes(_this.userId));
        _this.userComments.$loaded(function() {
          _this.locations = paginationService.onQueryChange(Locations, _this.listConfig);
        });
      } else {
        _this.locations = paginationService.onQueryChange(Locations, _this.listConfig);
      }
    }

    function getIconClass(location) {
      var classes = {};

      if (hasComment(location) && isConnected()) {
        classes['md-default-theme'] = true;
        classes['md-fg'] = true;
        classes['md-warn'] = true;
      }

      return classes;
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
        LocationNotesService.deleteLocation($intFirebaseObject(new LocationNote(_this.userId, location.name)));
      });
    }

    function hasComment(location) {
      return _this.userId && _this.userComments[location.name];
    }

    function isConnected() {
      return !!F4ctAuth.$getAuth();
    }

  }

})();
