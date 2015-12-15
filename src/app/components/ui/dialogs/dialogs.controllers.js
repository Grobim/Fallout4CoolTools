(function() {
  'use strict';

  angular.module('fallout4CoolTools.components.ui.dialogs')
    .controller('SimpleDialogController', ['$mdDialog', SimpleDialogControllerFactory])
    .controller('EditCommentDialogController', [
      '$mdDialog',
      'locationNotesService',
      'hackerLevels',
      'locksmithLevels',
      'location',
      EditCommentDialogControllerFactory
    ])
  ;

  function SimpleDialogControllerFactory($mdDialog) {

    var _this = this;

    return init();

    function init() {

      _this.hide = $mdDialog.hide;
      _this.cancel = $mdDialog.cancel;

    }

  }

  function EditCommentDialogControllerFactory(
    $mdDialog,
    locationNotesService,
    hackerLevels,
    locksmithLevels,
    location
  ) {

    var _this = this;

    _this.hide = hide;
    _this.cancel = $mdDialog.cancel;

    return init();

    function init() {
      _this.location = location;
      _this.hackerLevels = ['empty'].concat(hackerLevels).map(mapLevel);
      _this.locksmithLevels = ['empty'].concat(locksmithLevels).map(mapLevel);

      function mapLevel(level) {
        return {
          key   : 'fallout4CoolTools.layout.common.skillLevel.' + level,
          value : level
        };
      }
    }

    function hide() {
      if (_this.location.hacker === 'empty') {
        _this.location.hacker = null;
      }

      if (_this.location.locksmith === 'empty') {
        _this.location.locksmith = null;
      }
      locationNotesService.saveLocation(_this.location).then(function() {
        $mdDialog.hide();
      });
    }

  }

})();
