(function() {
  'use strict';

  angular.module('fallout4CoolTools.components.ui.dialogs')
    .service('DialogsService', ['$mdDialog', DialogsServiceFactory])
  ;

  function DialogsServiceFactory($mdDialog) {

    this.stateChangeDialog          = stateChangeDialog;
    this.editLocationCommentDialog  = editLocationCommentDialog;
    this.confirmDeleteCommentDialog = confirmDeleteCommentDialog;


    function stateChangeDialog() {
      return $mdDialog.show({
        templateUrl         : 'app/components/ui/dialogs/templates/stateChange.tpl.html',
        controller          : 'SimpleDialogController',
        controllerAs        : 'dialog',
        parent              : angular.element(document.body),
        clickOutsideToClose : true
      });
    }

    function editLocationCommentDialog(location, event) {
      return $mdDialog.show({
        templateUrl         : 'app/components/ui/dialogs/templates/locationComment.tpl.html',
        controller          : 'EditCommentDialogController',
        controllerAs        : 'editCommentdialog',
        parent              : angular.element(document.body),
        targetEvent         : event,
        clickOutsideToClose : true,
        locals              : {
          location : location
        }
      });
    }

    function confirmDeleteCommentDialog(event) {
      return $mdDialog.show({
        templateUrl         : 'app/components/ui/dialogs/templates/confirmDeleteLocationComment.tpl.html',
        controller          : 'SimpleDialogController',
        controllerAs        : 'dialog',
        parent              : angular.element(document.body),
        targetEvent         : event,
        clickOutsideToClose : true
      });
    }
  }

})();
