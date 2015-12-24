(function() {
  'use strict';

  angular.module('fallout4CoolTools.layout', [
    'ngAnimate',
    'ngSanitize',
    'ngMaterial',
    
    'ui.router',
    'pascalprecht.translate',
    'ncy-angular-breadcrumb',
    'mdColors',

    'fallout4CoolTools.common',
    'fallout4CoolTools.components.ui.breadCrumb',
    'fallout4CoolTools.components.ui.toast',
    'fallout4CoolTools.components.ui.directives.materialMenu',
    'fallout4CoolTools.components.ui.directives.showAuth',
    'fallout4CoolTools.components.ui.icons',

    'fallout4CoolTools.layout.main',
    'fallout4CoolTools.layout.login',
    'fallout4CoolTools.layout.profile',
    'fallout4CoolTools.layout.locationNotes'
  ]);

})();
