(function() {
  'use strict';

  angular.module('fallout4CoolTools.profiles')
    .factory('ProfilePrivateInfosRef', ['F4ctRootRef', ProfilePrivateInfosRef])
    .factory('ProfilePrivateInfoRef', ['ProfilePrivateInfosRef', ProfilePrivateInfoRef])
  ;

  function ProfilePrivateInfosRef(F4ctRootRef) {
    return F4ctRootRef.child('profilePrivateInfos');
  }

  function ProfilePrivateInfoRef(ProfilePrivateInfosRef) {
    return function(profileId) {
      return ProfilePrivateInfosRef.child(profileId);
    };
  }

})();
