(function() {
  'use strict';

  angular.module('fallout4CoolTools.components.persistence.locationNotes')
    .factory('LocationNotes', ['F4ctRootRef', LocationNotes])
    .factory('LocationNote', ['LocationNotes', LocationNote])
  ;

  function LocationNotes(F4ctRootRef) {
    return F4ctRootRef.child('locationNotes');
  }

  function LocationNote(LocationNotes) {
    return function(userId) {
      return LocationNotes.child(userId);
    };
  }

})();
