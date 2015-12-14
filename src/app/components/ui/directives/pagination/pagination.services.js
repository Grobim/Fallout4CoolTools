(function() {
  'use strict';

  angular.module('fallout4CoolTools.components.ui.directives.pagination')
    .service('paginationService', ['$filter', PaginationService])
  ;

  function PaginationService($filter) {

    return {
      onQueryChange : onQueryChange
    };

    function onQueryChange(list, tableConfig) {

      var workingList = list,
          from,
          to;
      // Filtering
      if (tableConfig.query && tableConfig.query.length) {
        workingList = $filter('filter')(workingList, tableConfig.query) || [];
      }

      if (_.isArray(workingList)) {
        tableConfig.totalItems = workingList.length;
      } else if (_.isObject(workingList)) {
        tableConfig.totalItems = _.size(workingList);
      } else {
        return list;
      }
      tableConfig.page = Math.max(1, Math.min((tableConfig.page) || 0, (Math.ceil(tableConfig.totalItems / tableConfig.limit) || 0)));
      from = (tableConfig.page - 1) * tableConfig.limit;
      to = _.min([tableConfig.totalItems - 1, from + tableConfig.limit - 1]);

      // Sorting
      if (tableConfig.order && tableConfig.order.length) {
        var reverse = false,
            predicate = tableConfig.order;

        if (tableConfig.order.charAt(0) === '-') {
          reverse = true;
          predicate = predicate.slice(1);
        }
        workingList = $filter('orderBy')(workingList, predicate, reverse);
      }

      // Applying range
      workingList = _.take(workingList, to + 1);
      workingList = _.takeRight(workingList, to - from + 1);

      return workingList;

    }

  }

})();
