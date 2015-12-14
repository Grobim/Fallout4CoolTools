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

      return init();

      function init() {
        scope.pagnModel = pagnModel;
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

      function _getMaxPages() {
        return Math.ceil(scope.config.totalItems / scope.config.limit);
      }
    }
  }

})();
