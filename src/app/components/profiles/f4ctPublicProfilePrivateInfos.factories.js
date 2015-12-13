(function() {
  'use strict';

  angular.module('fallout4CoolTools.profiles')
    .factory('PublicProfilePrivateInfosRef', ['F4ctRootRef', PublicProfilePrivateInfosRefFactory])
    .factory('PublicProfilePrivateInfoRef', ['PublicProfilePrivateInfosRef', PublicProfilePrivateInfoRefFactory])
    .factory('PublicProfilePrivateInfoKeyRef', ['PublicProfilePrivateInfoRef', PublicProfilePrivateInfoKeyRefFactory])
  ;

  function PublicProfilePrivateInfosRefFactory(F4ctRootRef) {
    return F4ctRootRef.child('publicProfilePrivateInfos');
  }

  function PublicProfilePrivateInfoRefFactory(PublicProfilePrivateInfosRef) {
    return function(userId) {
      return PublicProfilePrivateInfosRef.child(userId);
    };
  }

  function PublicProfilePrivateInfoKeyRefFactory(PublicProfilePrivateInfoRef) {
    return function(userId, key) {
      return new PublicProfilePrivateInfoRef(userId).child(key);
    };
  }

})();
