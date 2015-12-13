(function() {
  'use strict';

  angular.module('fallout4CoolTools.components.ui.dialogs')
    .service('DialogsService', ['$mdDialog', DialogsServiceFactory])
  ;

  function DialogsServiceFactory($mdDialog) {
    return {
      stateChangeDialog : stateChangeDialog
    };

    function stateChangeDialog() {
      return $mdDialog.show({
        templateUrl         : 'app/components/ui/dialogs/templates/stateChange.tpl.html',
        controller          : 'SimpleDialogController',
        controllerAs        : 'dialog',
        parent              : angular.element(document.body),
        clickOutsideToClose : true
      });
    }
  }

})();
