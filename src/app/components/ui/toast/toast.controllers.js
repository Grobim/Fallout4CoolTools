(function() {
  'use strict';

  angular.module('fallout4CoolTools.components.ui.toast')
    .controller('DynamicToastController', ['content', 'className', DynamicToastController])
  ;

  function DynamicToastController(content, className) {
    var _this = this;

    _this.content = content;
    
    if (className) {
      _this.classeList = {
        'md-bg' : true
      };
      _this.classeList[className] = true;
    }
  }

})();
