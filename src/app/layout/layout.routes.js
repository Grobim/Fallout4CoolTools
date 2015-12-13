(function() {
  'use strict';

  angular.module('fallout4CoolTools.layout')
    .config([
      '$stateProvider',
      '$urlRouterProvider',
      '$translateProvider',
      'i18nDefaultFallBackLanguage',
      LayoutRoutes
    ])
  ;

  function LayoutRoutes(
    $stateProvider,
    $urlRouterProvider,
    $translateProvider,
    i18nDefaultFallBackLanguage
  ) {

    $stateProvider.state('fallout4CoolTools', {
      url          : '/fallout4CoolTools/:langKey',
      templateUrl  : 'app/layout/layout.tpl.html',
      controller   : 'LayoutController',
      controllerAs : 'layoutCtrl',
      abstract     : true
    });

    $urlRouterProvider.otherwise(
      '/fallout4CoolTools/' +
      ($translateProvider.preferredLanguage() || i18nDefaultFallBackLanguage) +
      '/home'
    );

  }

})();
