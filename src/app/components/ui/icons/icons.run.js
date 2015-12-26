(function() {
  'use strict';

  angular.module('fallout4CoolTools.components.ui.icons')
    .run(['ngMdIconService', '$templateCache', iconsRun])
  ;

  function iconsRun(ngMdIconService, $templateCache) {
    var iconSet = '<svg><defs>';

    _.forOwn(ngMdIconService.getShapes(), function(shape, key) {
      iconSet += makeIcon(key, shape);
    });

    iconSet += makeIcon('navigate-first', '<path d="M7 6 v12 h2 v-12 h-2z M17.41 7.41L16 6l-6 6 6 6 1.41-1.41L12.83 12z"/>');
    iconSet += makeIcon('navigate-last', '<path d="M15 6 v12 h2 v-12 h-2z M8 6L6.59 7.41 11.17 12l-4.58 4.59L8 18l6-6z"/>');

    iconSet += '</defs></svg>';

    $templateCache.put('iconSet.svg', iconSet);

    function makeIcon(key, shape) {
      return '<svg id="' + key + '">' + shape + '</svg>';
    }

  }

})();
