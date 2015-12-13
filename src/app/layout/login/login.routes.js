(function() {
  'use strict';

  angular.module('fallout4CoolTools.layout.login')
    .config(['$stateProvider', HomeRoutes])
  ;

  function HomeRoutes($stateProvider) {

    $stateProvider.state('fallout4CoolTools.login', {
      url           : '/login',
      templateUrl   : 'app/layout/login/login.tpl.html',
      controller    : 'LoginController',
      controllerAs  : 'loginCtrl',
      data          : {
        bodyClass      : 'login',
        windowTitleKey : 'fallout4CoolTools.layout.header.login',
        requireAuth    : false
      },
      ncyBreadcrumb : {
        translate : 'fallout4CoolTools.layout.header.login'
      }
    });

  }

})();
