(function() {
  'use strict';

  angular.module('fallout4CoolTools.components.ui.breadCrumb')
    .provider('breadCrumbModelService', [BreadCrumbModelServiceProvider])
  ;

  function BreadCrumbModelServiceProvider() {
    var _model = {},
        _options = {
          modelKey : 'bcModel'
        };
    return {
      options : options,
      $get    : ['$rootScope', BreadCrumbModelService]
    };

    function options(optionsObj) {
      return _.assign(_options, optionsObj);
    }

    function BreadCrumbModelService($rootScope) {

      _.set($rootScope, _options.modelKey, _model);

      return {
        model  : _model,
        value  : value,
        remove : remove
      };

      function value(key, valueParam) {
        if (!valueParam) {
          return _.get(_model, key);
        } else {
          return _.set(_model, key, valueParam);
        }
      }

      function remove(key) {
        if (key) {
          _.set(_model, key, undefined);
        } else {
          _model = {};
          _.set($rootScope, _options.modelKey, _model);
        }
      }
    }

  }

})();
