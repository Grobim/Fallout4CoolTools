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
      var promises = [],
          hackerBiDir,
          locksmithBiDir;

      promises.push(location.$save());

      if (location.hacker) {
        hackerBiDir = $intFirebaseObject(new BiDirLocationNote(F4ctAuth.$getAuth().uid, 'hacker', location.hacker));
        hackerBiDir.$loaded(function() {
          hackerBiDir[location.$id] = true;
          promises.push(hackerBiDir.$save());
        });
      }
      if (currentHacker && currentHacker !== location.hacker) {
        promises.push($intFirebaseObject(
          new BiDirLocationNote(F4ctAuth.$getAuth().uid, 'hacker', currentHacker).child(location.$id)
        ).$remove());
      }

      if (location.locksmith) {
        locksmithBiDir = $intFirebaseObject(new BiDirLocationNote(F4ctAuth.$getAuth().uid, 'locksmith', location.locksmith));
        locksmithBiDir.$loaded(function() {
          locksmithBiDir[location.$id] = true;
          promises.push(locksmithBiDir.$save());
        });
      }
      if (currentLocksmith && currentLocksmith !== location.locksmith) {
        promises.push($intFirebaseObject(
          new BiDirLocationNote(F4ctAuth.$getAuth().uid, 'locksmith', currentLocksmith).child(location.$id)
        ).$remove());
      }

      return $q.all(promises);
    }

    function deleteLocation(location) {
      var deferred = $q.defer(),
          promises = [deferred.promise];

      location.$loaded(function() {

        if (location.hacker) {
          var hackerBiDir = $intFirebaseObject(new BiDirLocationNote(F4ctAuth.$getAuth().uid, 'hacker', location.hacker).child(location.$id));
          promises.push(hackerBiDir.$remove());
        }

        if (location.locksmith) {
          var locksmithBiDir = $intFirebaseObject(new BiDirLocationNote(F4ctAuth.$getAuth().uid, 'locksmith', location.locksmith).child(location.$id));
          promises.push(locksmithBiDir.$remove());
        }

        promises.push(location.$remove());

        deferred.resolve();

      });

      return $q.all(promises);
    }
  }

})();
