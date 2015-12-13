(function() {
  'use strict';

  angular.module('fallout4CoolTools.components.ui.directives.chooseFileButton')
    .directive('chooseFileButton', [ChooseFileButtonDirective])
  ;

  function ChooseFileButtonDirective() {
    return {
      restrict : 'A',
      link     : linkFnc
    };
  }

  function linkFnc(scope, elem, attrs) {
    elem.bind('click', function() {
      angular.element(document.querySelector('#' + attrs.chooseFileButton))[0].click();
    });
  }

})();
