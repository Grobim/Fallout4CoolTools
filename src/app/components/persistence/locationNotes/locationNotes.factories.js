(function() {
  'use strict';

  angular.module('fallout4CoolTools.components.persistence.locationNotes')
    .factory('UserLocationNotes', ['F4ctRootRef', UserLocationNotes])
    .factory('LocationNotes', ['UserLocationNotes', LocationNotes])
    .factory('LocationNote', ['LocationNotes', LocationNote])
  ;

  function UserLocationNotes(F4ctRootRef) {
    return F4ctRootRef.child('locationNotes');
  }

  function LocationNotes(UserLocationNotes) {
    return function(userId) {
      return UserLocationNotes.child(userId);
    };
  }

  function LocationNote(LocationNotes) {
    return function(userId, locationName) {
      return new LocationNotes(userId).child(locationName);
    };
  }

})();
