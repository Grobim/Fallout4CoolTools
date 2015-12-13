(function() {
  'use strict';

  angular.module('fallout4CoolTools.profiles')
    .service('ProfilesService', [
      '$q',
      '$intFirebaseObject',
      'ProfileRef',
      'ProfilePrivateInfoRef',
      ProfilesService
    ])
  ;

  function ProfilesService($q, $intFirebaseObject, ProfileRef, ProfilePrivateInfoRef) {
    return {
      createProfile : createProfile
    };

    function createProfile(profileId, profileData) {
      var profileRef = $intFirebaseObject(new ProfileRef(profileId)),
          profilePrivateInfoRef = $intFirebaseObject(new ProfilePrivateInfoRef(profileId));

      if (!profileData.public) {
        throw 'No public information provided';
      }
      _.assign(profileRef, profileData.public);
      if (profileData.private) {
        _.assign(profilePrivateInfoRef, profileData.private);
      }

      return $q.all([profileRef.$save(), profilePrivateInfoRef.$save()]);
    }
  }

})();
