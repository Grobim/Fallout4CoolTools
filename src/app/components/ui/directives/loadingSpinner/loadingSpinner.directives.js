(function() {
  'use strict';

  angular.module('fallout4CoolTools.components.ui.directives.loadingSpinner')
    .directive('loadingSpinner', ['LoadingSpinner', LoadingSpinnerDirective])
  ;

  function LoadingSpinnerDirective(LoadingSpinner) {

    return {
      restrict : 'A',
      compile  : compileFnc,
      scope    : true
    };

    function compileFnc($element, $attrs) {

      $element.prepend([
        '<div id="' + $attrs.loadingSpinner + 'Spinner" ng-if="loading()" layout="" layout-align="center center" flex>',
        '  <md-progress-circular' + ((_isMdButton($element)) ? ' md-diameter="20px"' : '') + ' md-mode="indeterminate"></md-progress-circular>',
        '</div>'
      ].join(''));

      return linkFnc;
    }

    function linkFnc($scope, $element, $attrs) {

      $scope.$watch(function() {
        return LoadingSpinner.get($attrs.loadingSpinner);
      }, function(loading) {
        if (loading) {

          if (!_isMdButton($element)) {
            $element.css('height', $element.height());
          } else {
            $element.children(':not(md-icon)').css('height', '36px');
          }

          $element.children(':not(#' + $attrs.loadingSpinner + 'Spinner)').hide();


        } else {

          if (!_isMdButton($element)) {
            $element.css('height', 'auto');
          }

          $element.children(':not(#' + $attrs.loadingSpinner + 'Spinner)').show();

        }
      });

      $scope.loading = function() {
        return LoadingSpinner.get($attrs.loadingSpinner);
      };

    }

    function _isMdButton($element) {
      var parent = $element.parent().get(0);
      if (!parent) {
        return false;
      }
      return ['md-button', 'button'].indexOf(parent.localName) > -1;
    }

  }

})();
