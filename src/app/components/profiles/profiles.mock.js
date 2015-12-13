(function() {
  'use strict';

  angular.module('fallout4CoolTools.mocks.data.profiles', [
      'fallout4CoolTools.profiles'
    ])
    .run([
      'ProfilesRef',
      profilesInjector
    ])
  ;

  function profilesInjector(ProfilesRef) {

    ProfilesRef.set({
      id1 : {
        nickname : 'First'
      },
      id2 : {
        nickname : 'Second'
      }
    });

  }

})();
