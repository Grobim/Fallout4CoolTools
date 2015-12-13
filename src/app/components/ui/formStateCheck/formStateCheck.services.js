(function() {
  'use strict';

  angular.module('fallout4CoolTools.components.ui.formStateCheck')
    .service('FormStateCheckService', ['$state', '$window', '$translate', 'DialogsService', FormStateCheckServiceFactory])
  ;

  function FormStateCheckServiceFactory($state, $window, $translate, DialogsService) {
    var message;
    $translate('fallout4CoolTools.components.ui.dialogs.stateChange.content').then(function(translation) {
      message = translation;
    });
    return {
      addCheck : addCheck
    };

    function addCheck(scope, formName) {
      var cancelCheck = scope.$on('$stateChangeStart', stateChangeStartListener);
      $window.addEventListener('beforeunload', areYouSurePrompt);

      scope.$on('$destroy', function() {
        cancelCheck();
        $window.removeEventListener('beforeunload', areYouSurePrompt);
      });

      function stateChangeStartListener(event, toState, toParams) {
        var form = scope.$eval(formName);
        if (form.$dirty) {
          DialogsService.stateChangeDialog().then(function() {
            form.$setPristine();
            $state.go(toState.name, toParams);
          });
          event.preventDefault();
        }

      }

      function areYouSurePrompt(event) {
        if (typeof event === 'undefined') {
          event = window.event;
        }
        if (event && scope.$eval(formName).$dirty) {
          event.returnValue = message;
        }
        // return message;
      }
    }
  }

})();
