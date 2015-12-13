(function() {
  'use strict';

  angular.module('fallout4CoolTools.components.ui.directives.validators')
    .directive('rangelength', rangelengthDirective)
  ;

  function rangelengthDirective() {
    return {
      restrict : 'A',
      require  : '?ngModel',
      link     : link
    };

    function link($scope, $element, $attrs, ngModelCtrl) {
      if (!ngModelCtrl) {
        return;
      }
      var minlength = 0,
          maxlength = -1;

      $attrs.$observe('minlength', function(value) {
        minlength = parseInt(value) || 0;
        ngModelCtrl.$validate();
      });
      $attrs.$observe('maxlength', function(value) {
        var intVal = parseInt(value);
        maxlength = isNaN(intVal) ? -1 : intVal;
        ngModelCtrl.$validate();
      });

      ngModelCtrl.$validators.rangelength = function(modelValue, viewValue) {
        return (maxlength < 0) || ngModelCtrl.$isEmpty(viewValue) || (viewValue.length >= minlength && viewValue.length <= maxlength);
      };

    }
  }

})();
