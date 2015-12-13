(function() {
  'use strict';

  angular.module('fallout4CoolTools.components.ui.directives.showAuth')
    .directive('ngShowAuth', ['F4ctAuth', '$timeout', ngShowAuthDirective])
  ;

  function ngShowAuthDirective(F4ctAuth, $timeout) {
    return {
      restrict : 'A',
      link     : linkFn
    };

    function linkFn(scope, el) {
      el.addClass('ng-cloak'); // hide until we process it

      function update() {
        // sometimes if ngCloak exists on same element, they argue, so make sure that
        // this one always runs last for reliability
        $timeout(function () {
          el.toggleClass('ng-cloak', !F4ctAuth.$getAuth());
        }, 0);
      }

      F4ctAuth.$onAuth(update);
      update();
    }
  }

})();
