(function() {
  'use strict';

  angular.module('fallout4CoolTools.components.angularFireInterceptor')
    .factory('$intFirebaseObject', [
      '$q',
      '$firebaseObject',
      '$firebaseErrorInterceptor',
      intFirebaseObjectFactory
    ])
    .factory('$intFirebaseArray', [
      '$q',
      '$firebaseArray',
      '$firebaseErrorInterceptor',
      intFirebaseArrayFactory
    ])
  ;

  function intFirebaseObjectFactory($q, $firebaseObject, $firebaseErrorInterceptor) {
    return $firebaseObject.$extend({
      $$error : function(err) {
        $firebaseObject.prototype.$$error.apply(this, arguments);
        $firebaseErrorInterceptor.notify(err, 'error');
      },
      $save   : function() {
        return _genericPromiseHandler($firebaseObject.prototype.$save, this, arguments, 'save');
      },
      $remove : function() {
        return _genericPromiseHandler($firebaseObject.prototype.$remove, this, arguments, 'remove');
      },
      $loaded : function() {
        return _genericPromiseHandler($firebaseObject.prototype.$loaded, this, arguments, 'loaded');
      }
    });

    function _genericPromiseHandler(func, ctx, args, actionCode) {
      var deferred = $q.defer();
      func.apply(ctx, args)
        .then(deferred.resolve, function(error) {
          $firebaseErrorInterceptor.notify(error, actionCode);
          deferred.reject(error);
        });
      return deferred.promise;
    }

  }

  function intFirebaseArrayFactory($q, $firebaseArray, $firebaseErrorInterceptor) {
    return $firebaseArray.$extend({
      $$error : function(err) {
        $firebaseArray.prototype.$$error.apply(this, arguments);
        $firebaseErrorInterceptor.notify(err);
      },
      $add    : function() {
        return _genericPromiseHandler($firebaseArray.prototype.$add, this, arguments, 'add');
      },
      $save   : function() {
        return _genericPromiseHandler($firebaseArray.prototype.$save, this, arguments, 'save');
      },
      $remove : function() {
        return _genericPromiseHandler($firebaseArray.prototype.$remove, this, arguments, 'remove');
      },
      $loaded : function() {
        return _genericPromiseHandler($firebaseArray.prototype.$loaded, this, arguments, 'loaded');
      }
    });

    function _genericPromiseHandler(func, ctx, args, actionCode) {
      var deferred = $q.defer();
      func.apply(ctx, args)
        .then(deferred.resolve, function(error) {
          $firebaseErrorInterceptor.notify(error, actionCode);
          deferred.reject(error);
        });
      return deferred.promise;
    }
  }

})();
