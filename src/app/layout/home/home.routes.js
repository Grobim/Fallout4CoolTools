(function() {
  'use strict';

  angular.module('fallout4CoolTools.layout.main')
    .config(['$stateProvider', HomeRoutes])
  ;

  function HomeRoutes($stateProvider) {

    $stateProvider.state('fallout4CoolTools.home', {
      url           : '/home',
      templateUrl   : 'app/layout/home/home.tpl.html',
      controller    : 'HomeController',
      controllerAs  : 'homeCtrl',
      data          : {
        bodyClass      : 'home',
        windowTitleKey : 'fallout4CoolTools.layout.header.home'
      },
      ncyBreadcrumb : {
        translate : 'fallout4CoolTools.layout.header.home'
      }
    });

  }

})();
