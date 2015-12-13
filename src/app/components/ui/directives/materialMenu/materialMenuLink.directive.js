(function() {
  'use strict';

  angular.module('fallout4CoolTools.components.ui.directives.materialMenu')
    .directive('materialMenuLink', ['$state', '$mdMedia', '$mdSidenav', MenuLinkDirective])
  ;

  function MenuLinkDirective($state, $mdMedia, $mdSidenav) {
    return {
      scope       : {
        section : '='
      },
      templateUrl : 'app/components/ui/directives/materialMenu/materialMenuLink.tpl.html',
      link        : link
    };

    function link($scope) {

      $scope.onClick = function() {

        if ($mdMedia('sm') || $mdMedia('md')) {
          $mdSidenav('mainMenu').close();
        }

      };

      $scope.focusSection = function () {
        // set flag to be used later when
        // $locationChangeSuccess calls openPage()
      };
    }
  }

})();
