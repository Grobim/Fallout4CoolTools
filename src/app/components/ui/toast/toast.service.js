(function() {
  'use strict';

  angular.module('fallout4CoolTools.components.ui.toast')
    .service('ToastService', ['$q', '$timeout', '$translate', '$mdToast', ToastService])
  ;

  function ToastService($q, $timeout, $translate, $mdToast) {
    return {
      simple : simple,
      error  : error
    };

    function simple(messageKey) {
       _showToast(messageKey);
    }

    function error(messageKey) {
      _showToast(messageKey, 'md-warn');
    }

    function _showToast(messageKey, className) {
      $mdToast.show({
        templateUrl      : 'app/components/ui/toast/templates/dynamic.tpl.html',
        controller       : 'DynamicToastController',
        controllerAs     : 'toast',
        bindToController : true,
        position         : 'bottom right',
        locals           : {
          content   : $translate(messageKey),
          className : className
        }
      });
    }

  }

})();
