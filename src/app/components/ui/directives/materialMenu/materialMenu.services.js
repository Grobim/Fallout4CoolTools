(function() {
  'use strict';

  angular.module('fallout4CoolTools.components.ui.directives.materialMenu')
    .factory('materialMenu', [
        materialMenuFactory
    ])
  ;

  function materialMenuFactory() {

    var self;
    return self = {

      toggleSelectSection: function (section) {
        self.openedSection = (self.openedSection === section ? null : section);
      },
      isSectionSelected: function (section) {
        return self.openedSection === section;
      }
    };

  }

})();
