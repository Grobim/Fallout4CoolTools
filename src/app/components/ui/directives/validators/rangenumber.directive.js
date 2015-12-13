(function() {
  'use strict';

  angular.module('fallout4CoolTools.components.ui.directives.validators')
    .directive('rangenumber', rangenumberDirective)
  ;

  function rangenumberDirective() {
    return {
      restrict : 'A',
      require  : '?ngModel',
      link     : link
    };

    function link($scope, $element, $attrs, ngModelCtrl) {
      if (!ngModelCtrl || $element.attr('type') !== 'number') {
        return;
      }
      var min = 0,
          max = -1;

      $attrs.$observe('min', function(value) {
        min = parseInt(value) || 0;
        ngModelCtrl.$validate();
      });
      $attrs.$observe('max', function(value) {
        var intVal = parseInt(value);
        max = isNaN(intVal) ? -1 : intVal;
        ngModelCtrl.$validate();
      });

      ngModelCtrl.$validators.rangenumber = function(modelValue, viewValue) {
        return (max < 0) || ngModelCtrl.$isEmpty(viewValue) || (viewValue >= min && viewValue <= max);
      };
    }
  }

})();
