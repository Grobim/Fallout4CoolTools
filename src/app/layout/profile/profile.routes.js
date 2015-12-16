(function() {
  'use strict';

  angular.module('fallout4CoolTools.layout.profile')
    .config(['$stateProvider', HomeRoutes])
  ;

  function HomeRoutes($stateProvider) {

    $stateProvider.state('fallout4CoolTools.profile', {
      url           : '/profile',
      templateUrl   : 'app/layout/profile/profile.tpl.html',
      controller    : 'ProfileController',
      controllerAs  : 'profileCtrl',
      data          : {
        bodyClass      : 'profile',
        windowTitleKey : 'fallout4CoolTools.layout.header.profile',
        titleKey       : 'fallout4CoolTools.layout.header.profile',
        requireAuth    : true
      },
      ncyBreadcrumb : {
        translate : 'fallout4CoolTools.layout.header.profile'
      }
    });

  }

})();
