(function() {
  'use strict';

  angular.module('fallout4CoolTools.components.ui.breadCrumb')
    .config(['$breadcrumbProvider', BreadCrumbConfig])
  ;

  function BreadCrumbConfig($breadcrumbProvider) {
    $breadcrumbProvider.setOptions({
      prefixStateName : 'fallout4CoolTools.home',
      templateUrl     : 'app/components/ui/breadCrumb/breadCrumb.tpl.html'
    });
  }

})();
