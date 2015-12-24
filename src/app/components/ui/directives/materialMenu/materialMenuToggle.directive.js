(function() {
  'use strict';

  angular.module('fallout4CoolTools.components.ui.directives.materialMenu')
    .directive('materialMenuToggle', ['$state', 'materialMenu', MenuToggleDirective])
  ;

  function MenuToggleDirective($state, materialMenu) {
    return {
      scope: {
        section : '='
      },
      templateUrl: 'app/components/ui/directives/materialMenu/materialMenuToggle.tpl.html',
      link: link
    };

    function link($scope, $element) {
          
      var parentNode = $element[0].parentNode.parentNode.parentNode;
      if (parentNode.classList.contains('parent-list-item')) {
        var heading = parentNode.querySelector('h2');
        $element[0].firstChild.setAttribute('aria-describedby', heading.id);
      }

      $scope.getCaretIcon = function() {
        if ($scope.isOpen()) {
          return 'keyboard_arrow_up.svg';
        } else {
          return 'keyboard_arrow_down.svg';
        }
      };

      $scope.isCurrentState = function() {
        return $state.includes($scope.section.state);
      };

      $scope.isOpen = function() {
        return materialMenu.isSectionSelected($scope.section);
      };

      $scope.toggle = function() {
        materialMenu.toggleSelectSection($scope.section);
      };
    }
  }

})();
