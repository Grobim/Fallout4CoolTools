(function() {
  'use strict';

  angular.module('fallout4CoolTools.layout')
    .constant('menuStates', [
      {
        name  : 'fallout4CoolTools.layout.header.home',
        state : 'fallout4CoolTools.home',
        type  : 'link',
        icon  : 'home'
      }, {
        name  : 'fallout4CoolTools.layout.header.locationNotes',
        state : 'fallout4CoolTools.locationNotes',
        type  : 'link',
        icon  : 'comment'
      }, {
        name  : 'fallout4CoolTools.layout.header.profile',
        state : 'fallout4CoolTools.profile',
        type  : 'link',
        icon  : 'person'
      }, {
        name  : 'fallout4CoolTools.layout.header.login',
        state : 'fallout4CoolTools.login',
        type  : 'link',
        icon  : 'login'
      }
    ])
  ;

})();
