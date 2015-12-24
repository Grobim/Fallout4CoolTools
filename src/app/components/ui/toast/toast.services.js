(function() {
  'use strict';

  angular.module('fallout4CoolTools.components.ui.toast')
    .service('ToastService', ['$q', '$timeout', '$translate', '$mdToast', ToastService])
  ;

  function ToastService($q, $timeout, $translate, $mdToast) {

    this.simple = simple;

    function simple(messageKey) {
       _showToast(messageKey);
    }

    function _showToast(messageKey) {
      $mdToast.show({
        templateUrl      : 'app/components/ui/toast/templates/dynamic.tpl.html',
        controller       : _.noop,
        controllerAs     : 'toast',
        bindToController : true,
        position         : 'bottom right',
        locals           : {
          content : $translate.instant(messageKey)
        }
      });
    }

  }

})();
