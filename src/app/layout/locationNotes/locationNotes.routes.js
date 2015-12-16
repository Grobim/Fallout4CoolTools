(function() {
  'use strict';

  angular.module('fallout4CoolTools.layout.locationNotes')
    .config(['$stateProvider', LocationNoteRoutes])
  ;

  function LocationNoteRoutes($stateProvider) {
    $stateProvider.state('fallout4CoolTools.locationNotes', {
      url           : '/locationNotes',
      templateUrl   : 'app/layout/locationNotes/locationNotes.tpl.html',
      controller    : 'LocationNotesController',
      controllerAs  : 'locNotesCtrl',
      data          : {
        bodyClass      : 'locationNotes',
        windowTitleKey : 'fallout4CoolTools.layout.header.locationNotes',
        titleKey       : 'fallout4CoolTools.layout.header.locationNotes'
      },
      ncyBreadcrumb : {
        translate : 'fallout4CoolTools.layout.header.locationNotes'
      }
    });
  }

})();
