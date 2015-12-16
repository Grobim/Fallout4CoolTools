(function() {
  'use strict';

  angular.module('fallout4CoolTools.components.persistence.locationNotes')
    .service('LocationNotesService', [
      '$q',
      '$intFirebaseObject',
      'LocationNote',
      'BiDirLocationNote',
      'BiDirLocationNotes',
      'F4ctAuth',
      LocationNotesService
    ])
  ;

  function LocationNotesService(
    $q,
    $intFirebaseObject,
    LocationNote,
    BiDirLocationNote,
    BiDirLocationNotes,
    F4ctAuth
  ) {

    this.saveLocation   = saveLocation;
    this.deleteLocation = deleteLocation;

    function saveLocation(location, currentHacker, currentLocksmith) {
      var deferred = $q.defer(),
          hackerBiDir,
          locksmithBiDir;
      location.$save().then(function() {

        if (location.hacker) {
          hackerBiDir = $intFirebaseObject(new BiDirLocationNote(F4ctAuth.$getAuth().uid, 'hacker', location.hacker));
          hackerBiDir.$loaded(function() {
            hackerBiDir[location.$id] = true;
            hackerBiDir.$save();
          });
        }
        if (currentHacker && currentHacker !== location.hacker) {
          $intFirebaseObject(
            new BiDirLocationNote(F4ctAuth.$getAuth().uid, 'hacker', currentHacker).child(location.$id)
          ).$remove();
        }

        if (location.locksmith) {
          locksmithBiDir = $intFirebaseObject(new BiDirLocationNote(F4ctAuth.$getAuth().uid, 'locksmith', location.locksmith));
          locksmithBiDir.$loaded(function() {
            locksmithBiDir[location.$id] = true;
            locksmithBiDir.$save();
          });
        }
        if (currentLocksmith && currentLocksmith !== location.locksmith) {
          $intFirebaseObject(
            new BiDirLocationNote(F4ctAuth.$getAuth().uid, 'locksmith', currentLocksmith).child(location.$id)
          ).$remove();
        }

        deferred.resolve();

      });

      return deferred.promise;
    }

    function deleteLocation(location) {
      var deferred = $q.defer();

      location.$loaded(function() {

        if (location.hacker) {
          var hackerBiDir = $intFirebaseObject(new BiDirLocationNote(F4ctAuth.$getAuth().uid, 'hacker', location.hacker).child(location.$id));
          hackerBiDir.$remove();
        }

        if (location.locksmith) {
          var locksmithBiDir = $intFirebaseObject(new BiDirLocationNote(F4ctAuth.$getAuth().uid, 'locksmith', location.locksmith).child(location.$id));
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
