(function() {
  'use strict';

  angular.module('fallout4CoolTools.components.ui.directives.pagination')
    .directive('f4ctPagination', [paginationDirective])
  ;

  function paginationDirective() {
    return {
      restrict    : 'E',
      scope       : {
        config : '=',
        change : '&'
      },
      link        : linkFnc,
      templateUrl : 'app/components/ui/directives/pagination/pagination.tpl.html'
    };

    function linkFnc(scope) {
      var pagnModel = {};

      pagnModel.previousPage = previousPage;
      pagnModel.nextPage = nextPage;

      pagnModel.firstPage = firstPage;
      pagnModel.lastPage = lastPage;

      pagnModel.cantPrevious = cantPrevious;
      pagnModel.cantNext = cantNext;

      pagnModel.getColor = getColor;

      pagnModel.from = from;
      pagnModel.to = to;

      return init();

      function init() {
        scope.pagnModel = pagnModel;

        pagnModel.states = [5, 10, 20];
      }

      function previousPage() {
        if (scope.config.page > 1) {
          scope.config.page = scope.config.page - 1;
          scope.change({});
        }
      }

      function nextPage() {
        if (scope.config.page < _getMaxPages()) {
          scope.config.page = scope.config.page + 1;
          scope.change({});
        }
      }

      function firstPage() {
        if (scope.config.page !== 1) {
          scope.config.page = 1;
          scope.change({});
        }
      }

      function lastPage() {
        if (scope.config.page !== _getMaxPages()) {
          scope.config.page = _getMaxPages();
          scope.change({});
        }
      }

      function cantPrevious() {
        return !scope.config.page || scope.config.page === 1;
      }

      function cantNext() {
        return !scope.config.page || scope.config.page === _getMaxPages();
      }

      function getColor(target) {
        var style = {};

        if (
            (target === 'previous' && cantPrevious()) ||
            (target === 'next' && cantNext())
        ) {
          style.fill = 'currentColor';
        } else {
          style.fill = 'grey';
        }

        return style;
      }

      function from() {
        return ((scope.config.page - 1) * scope.config.limit) + 1;
      }

      function to() {
        return Math.min(scope.config.totalItems, ((scope.config.page - 1) * parseInt(scope.config.limit)) + parseInt(scope.config.limit));
      }

      function _getMaxPages() {
        return Math.ceil(scope.config.totalItems / scope.config.limit);
      }
    }
  }

})();
