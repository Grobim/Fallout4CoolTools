(function() {
  'use strict';

  angular.module('fallout4CoolTools.components.ui.dialogs')
    .controller('SimpleDialogController', ['$mdDialog', SimpleDialogControllerFactory])
    .controller('EditCommentDialogController', ['$mdDialog', 'location', EditCommentDialogControllerFactory])
  ;

  function SimpleDialogControllerFactory($mdDialog) {

    var _this = this;

    return init();

    function init() {

      _this.hide = $mdDialog.hide;
      _this.cancel = $mdDialog.cancel;

    }

  }

  function EditCommentDialogControllerFactory($mdDialog, location) {

    var _this = this;

    _this.hide = hide;
    _this.cancel = $mdDialog.cancel;

    return init();

    function init() {
      _this.location = location;
    }

    function hide() {
      _this.location.$save().then(function() {
        $mdDialog.hide();
      });
    }

  }

})();
