(function() {
  'use strict';

  angular.module('fallout4CoolTools.mocks.data.profilePrivateInfos', [
      'fallout4CoolTools.profiles'
    ])
    .run([
      'ProfilePrivateInfosRef',
      profilePrivateInfosInjector
    ])
  ;

  function profilePrivateInfosInjector(ProfilePrivateInfosRef) {

    ProfilePrivateInfosRef.set({
      id1 : {
        email : 'FirstMail'
      },
      id2 : {
        email : 'SecondMail'
      }
    });

  }

})();
