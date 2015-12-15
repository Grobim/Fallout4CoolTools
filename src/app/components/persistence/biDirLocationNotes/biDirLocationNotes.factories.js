(function() {
  'use strict';

  angular.module('fallout4CoolTools.components.persistence.biDirlocationNotes')
    .factory('UserBiDirLocationNotes', ['F4ctRootRef', UserBiDirLocationNotes])
    .factory('BiDirLocationNotes', ['UserBiDirLocationNotes', BiDirLocationNotes])
    .factory('BiDirLocationNote', ['BiDirLocationNotes', BiDirLocationNote])
  ;

  function UserBiDirLocationNotes(F4ctRootRef) {
    return F4ctRootRef.child('biDirLocationNotes');
  }

  function BiDirLocationNotes(UserBiDirLocationNotes) {
    return function(userId) {
      return UserBiDirLocationNotes.child(userId);
    };
  }

  function BiDirLocationNote(BiDirLocationNotes) {
    return function(userId, skill, level) {
      return new BiDirLocationNotes(userId).child(skill).child(level);
    };
  }

})();
