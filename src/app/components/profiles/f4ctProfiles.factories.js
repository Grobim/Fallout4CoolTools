(function() {
  'use strict';

  angular.module('fallout4CoolTools.profiles')
    .factory('ProfilesRef', ['F4ctRootRef', ProfilesRefFactory])
    .factory('ProfileRef', ['ProfilesRef', ProfileRefFactory])
  ;

  function ProfilesRefFactory(F4ctRootRef) {
    return F4ctRootRef.child('profiles');
  }

  function ProfileRefFactory(ProfilesRef) {
    return function(profileId) {
      return ProfilesRef.child(profileId);
    };
  }

})();
