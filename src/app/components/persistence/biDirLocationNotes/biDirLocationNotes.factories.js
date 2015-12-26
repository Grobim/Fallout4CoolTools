(function() {
  'use strict';

  angular.module('fallout4CoolTools.components.persistence.biDirlocationNotes')
    .factory('UserBiDirLocationNotes', ['F4ctRootRef', UserBiDirLocationNotes])
    .factory('BiDirLocationNotes', ['UserBiDirLocationNotes', BiDirLocationNotes])
    .factory('BiDirLocationNoteFields', ['BiDirLocationNotes', BiDirLocationNoteFields])
    .factory('BiDirLocationNoteField', ['BiDirLocationNoteFields', BiDirLocationNoteField])
  ;

  function UserBiDirLocationNotes(F4ctRootRef) {
    return F4ctRootRef.child('biDirLocationNotes');
  }

  function BiDirLocationNotes(UserBiDirLocationNotes) {
    return function(userId) {
      return UserBiDirLocationNotes.child(userId);
    };
  }

  function BiDirLocationNoteFields(BiDirLocationNotes) {
    return function(userId, field) {
      return new BiDirLocationNotes(userId).child(field);
    };
  }

  function BiDirLocationNoteField(BiDirLocationNoteFields) {
    return function(userId, field, level) {
      return new BiDirLocationNoteFields(userId, field).child(level);
    };
  }

})();
