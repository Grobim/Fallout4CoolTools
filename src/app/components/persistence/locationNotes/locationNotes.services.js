(function() {
  'use strict';

  angular.module('fallout4CoolTools.components.persistence.locationNotes')
    .service('LocationNotesService', [
      '$q',
      '$intFirebaseObject',
      'LocationNote',
      'BiDirLocationNoteField',
      'BiDirLocationNoteFields',
      'BiDirLocationNotes',
      'F4ctAuth',
      LocationNotesService
    ])
  ;

  function LocationNotesService(
    $q,
    $intFirebaseObject,
    LocationNote,
    BiDirLocationNoteField,
    BiDirLocationNoteFields,
    BiDirLocationNotes,
    F4ctAuth
  ) {

    this.saveLocation   = saveLocation;
    this.deleteLocation = deleteLocation;

    function saveLocation(location, currentNote, currentHacker, currentLocksmith) {
      var promises = [],
          auth = F4ctAuth.$getAuth(),
          noteBiDir,
          hackerBiDir,
          locksmithBiDir;

      if (_.isString(location.note) && !location.note.length) {
        location.note = null;
      }

      promises.push(location.$save());

      if (location.note) {
        noteBiDir = $intFirebaseObject(new BiDirLocationNoteFields(auth.uid, 'notes'));
        noteBiDir.$loaded(function() {
          noteBiDir[location.$id] = true;
          promises.push(noteBiDir.$save());
        });
      }
      if (currentNote && !location.note) {
        promises.push($intFirebaseObject(
          new BiDirLocationNoteFields(auth.uid, 'notes').child(location.$id)
        ).$remove());
      }

      if (location.hacker) {
        hackerBiDir = $intFirebaseObject(new BiDirLocationNoteField(auth.uid, 'hacker', location.hacker));
        hackerBiDir.$loaded(function() {
          hackerBiDir[location.$id] = true;
          promises.push(hackerBiDir.$save());
        });
      }
      if (currentHacker && currentHacker !== location.hacker) {
        promises.push($intFirebaseObject(
          new BiDirLocationNoteField(auth.uid, 'hacker', currentHacker).child(location.$id)
        ).$remove());
      }

      if (location.locksmith) {
        locksmithBiDir = $intFirebaseObject(new BiDirLocationNoteField(auth.uid, 'locksmith', location.locksmith));
        locksmithBiDir.$loaded(function() {
          locksmithBiDir[location.$id] = true;
          promises.push(locksmithBiDir.$save());
        });
      }
      if (currentLocksmith && currentLocksmith !== location.locksmith) {
        promises.push($intFirebaseObject(
          new BiDirLocationNoteField(auth.uid, 'locksmith', currentLocksmith).child(location.$id)
        ).$remove());
      }

      return $q.all(promises);
    }

    function deleteLocation(location) {
      var deferred = $q.defer(),
          promises = [deferred.promise],
          auth = F4ctAuth.$getAuth(),
          noteBiDir,
          hackerBiDir,
          locksmithBiDir;

      location.$loaded(function() {

        if (location.note) {
          noteBiDir = $intFirebaseObject(new BiDirLocationNoteFields(auth.uid, 'notes').child(location.$id));
          promises.push(noteBiDir.$remove());
        }

        if (location.hacker) {
          hackerBiDir = $intFirebaseObject(new BiDirLocationNoteField(auth.uid, 'hacker', location.hacker).child(location.$id));
          promises.push(hackerBiDir.$remove());
        }

        if (location.locksmith) {
          locksmithBiDir = $intFirebaseObject(new BiDirLocationNoteField(auth.uid, 'locksmith', location.locksmith).child(location.$id));
          promises.push(locksmithBiDir.$remove());
        }

        promises.push(location.$remove());

        deferred.resolve();

      });

      return $q.all(promises);
    }
  }

})();
