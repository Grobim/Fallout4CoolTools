(function() {
  'use strict';

  angular.module('fallout4CoolTools.components.ui.directives.materialMenu')
    .directive('materialMenuLink', [MenuLinkDirective])
  ;

  function MenuLinkDirective() {
    return {
      scope       : {
        section : '=',
        onClick : '&'
      },
      templateUrl : 'app/components/ui/directives/materialMenu/materialMenuLink.tpl.html',
      link        : link
    };

    function link($scope) {

      $scope.focusSection = function () {

      };
    }
  }

})();
