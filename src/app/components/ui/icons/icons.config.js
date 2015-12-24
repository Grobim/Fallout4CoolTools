(function() {
  'use strict';

  angular.module('fallout4CoolTools.components.ui.icons')
    .run(['ngMdIconService', '$templateCache', iconConfigCacher])
  ;

  function iconConfigCacher(ngMdIconService, $templateCache) {
    _.forOwn(ngMdIconService.getShapes(), function(shape, key) {
      $templateCache.put(
        key + '.svg',
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">' + shape + '</svg>'
      );
    });
  }

})();
