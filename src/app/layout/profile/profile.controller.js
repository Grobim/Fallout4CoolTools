(function() {
  'use strict';

  angular.module('fallout4CoolTools.layout.profile')
    .controller('ProfileController', [
      '$scope',
      '$q',
      '$intFirebaseObject',
      'ToastService',
      'ProfileRef',
      'ProfilePrivateInfoRef',
      'PublicProfilePrivateInfoRef',
      'FormStateCheckService',
      'LoadingSpinner',
      'F4ctAuth',
      ProfileController
    ])
  ;

  function ProfileController(
    $scope,
    $q,
    $intFirebaseObject,
    ToastService,
    ProfileRef,
    ProfilePrivateInfoRef,
    PublicProfilePrivateInfoRef,
    FormStateCheckService,
    LoadingSpinner,
    F4ctAuth
  ) {
    var _this = this;

    _this.saveProfile = saveProfile;
    _this.userAuth = F4ctAuth.$getAuth();

    return init();

    function init() {

      LoadingSpinner.loading('profilePublicInfosLoad');
      LoadingSpinner.loading('profilePrivateInfosLoad');
      LoadingSpinner.loading('publicProfilePrivateInfoLoad');

      _this.profile = $intFirebaseObject(new ProfileRef(_this.userAuth.uid));
      _this.profilePrivateInfos = $intFirebaseObject(new ProfilePrivateInfoRef(_this.userAuth.uid));
      _this.publicProfilePrivateInfo = $intFirebaseObject(new PublicProfilePrivateInfoRef(_this.userAuth.uid));

      _this.profile.$loaded(function() {
        LoadingSpinner.loaded('profilePublicInfosLoad');
      }, function() {
        LoadingSpinner.loaded('profilePublicInfosLoad');
      });

      _this.profilePrivateInfos.$loaded(function() {
        LoadingSpinner.loaded('profilePrivateInfosLoad');
      }, function() {
        LoadingSpinner.loaded('profilePrivateInfosLoad');
      });

      _this.publicProfilePrivateInfo.$loaded(function() {
        LoadingSpinner.loaded('publicProfilePrivateInfoLoad');
      }, function() {
        LoadingSpinner.loaded('publicProfilePrivateInfoLoad');
      });

      FormStateCheckService.addCheck($scope, 'profileCtrl.profileForm');

      $scope.$on('$destroy', function() {
        _this.profilePrivateInfos.$destroy();
      });
    }

    function saveProfile() {
      if (LoadingSpinner.get('profilePublicInfosSave')) {
        return;
      }
      LoadingSpinner.loading('profilePublicInfosSave');
      $q.all([
        _this.profile.$save(),
        _this.profilePrivateInfos.$save(),
        _this.publicProfilePrivateInfo.$save()
      ])
      .then(_notifySave)
      .finally(function() {
        LoadingSpinner.loaded('profilePublicInfosSave');
      });
    }

    function _notifySave() {
      _this.profileForm.$setPristine();
      ToastService.simple('fallout4CoolTools.layout.profile.messages.success');
    }
  }

})();
