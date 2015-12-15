(function() {
  'use strict';

  angular.module('fallout4CoolTools.components.persistence.locationNotes')
    .service('locationNotesService', [
      '$q',
      '$intFirebaseObject',
      'BiDirLocationNote',
      'F4ctAuth',
      locationNotesService
    ])
  ;

  function locationNotesService(
    $q,
    $intFirebaseObject,
    BiDirLocationNote,
    F4ctAuth
  ) {
    return {
      saveLocation   : saveLocation,
      deleteLocation : deleteLocation
    };

    function saveLocation(location) {
      var deferred = $q.defer();

      location.$save().then(function() {

        if (location.hacker) {
          var hackerBiDir = $intFirebaseObject(new BiDirLocationNote(F4ctAuth.$getAuth().uid, 'hacker', location.hacker));
          hackerBiDir.$loaded(function() {
            hackerBiDir[location.$id] = true;
            hackerBiDir.$save();
          });
        }

        if (location.locksmith) {
          var locksmithBiDir = $intFirebaseObject(new BiDirLocationNote(F4ctAuth.$getAuth().uid, 'locksmith', location.locksmith));
          locksmithBiDir.$loaded(function() {
            locksmithBiDir[location.$id] = true;
            locksmithBiDir.$save();
          });
        }

        deferred.resolve();

      });

      return deferred.promise;
    }

    function deleteLocation(location) {
      var deferred = $q.defer();

      location.$loaded(function() {

        if (location.hacker) {
          var hackerBiDir = $intFirebaseObject(new BiDirLocationNote(F4ctAuth.$getAuth().uid, 'hacker', location.hacker));
          hackerBiDir.$remove();
        }

        if (location.locksmith) {
          var locksmithBiDir = $intFirebaseObject(new BiDirLocationNote(F4ctAuth.$getAuth().uid, 'locksmith', location.locksmith));
          locksmithBiDir.$remove();
        }

        location.$remove().then(function() {
          deferred.resolve();
        });
        

      });

      return deferred.promise;
    }
  }

})();
