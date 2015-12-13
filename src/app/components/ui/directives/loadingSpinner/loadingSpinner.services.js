(function() {
  'use strict';

  angular.module('fallout4CoolTools.components.ui.directives.loadingSpinner')
    .service('LoadingSpinner', LoadingSpinnerService)
  ;

  function LoadingSpinnerService() {
    var _keys = {};

    return {
      get     : get,
      loading : loading,
      loaded  : loaded
    };

    function get(key) {
      return _keys[key];
    }

    function loading(key) {
      _keys[key] = true;
    }

    function loaded(key) {
      _keys[key] = false;
    }

  }

})();
