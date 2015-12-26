(function() {
  'use strict';

  angular.module('fallout4CoolTools.components.ui.icons')
    .config(['$mdIconProvider', iconsConfig])
  ;

  function iconsConfig($mdIconProvider) {
    $mdIconProvider
      .defaultIconSet('iconSet.svg', 24)
      .iconSet('locationIcons', 'locationIcons/locationIcons.svg')
    ;
  }

})();
