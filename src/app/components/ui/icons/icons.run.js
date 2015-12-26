(function() {
  'use strict';

  angular.module('fallout4CoolTools.components.ui.icons')
    .run(['ngMdIconService', '$templateCache', iconConfigCacher])
  ;

  function iconConfigCacher(ngMdIconService, $templateCache) {
    var iconSet = '<svg><defs>';
    _.forOwn(ngMdIconService.getShapes(), function(shape, key) {
      iconSet += '<g id="' + key + '">' + shape + '</g>';
    });
    iconSet += '</defs></svg>';

    $templateCache.put('iconSet.svg', iconSet);
  }

})();
