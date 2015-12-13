(function() {
  'use strict';

  angular.module('fallout4CoolTools.components.angularFireInterceptor')
    .provider('$firebaseErrorInterceptor', FirebaseErrorInterceptorProvider)
  ;

  function FirebaseErrorInterceptorProvider() {
    var _defaultHandler = function(err, actionCode) {
      console.log('From interceptor (action : ' + actionCode + ')', err);
    };

    return {
      setDefaultHandler : setDefaultHandler,
      $get              : [FirebaseErrorInterceptor]
    };

    function setDefaultHandler(newHandler) {
      _defaultHandler = newHandler;
    }

    function FirebaseErrorInterceptor() {
      var _currentHandler = _defaultHandler;
      return {
        notify       : notify,
        setHandler   : setHandler,
        resetHandler : resetHandler
      };

      function notify(err, actionCode) {
        _currentHandler(err, actionCode);
      }

      function setHandler(newHandler, scope) {
        _currentHandler = newHandler;

        if (scope) {
          var cancel = scope.$on('$destroy', function() {
            resetHandler();
            cancel();
          });
        }
      }

      function resetHandler() {
        _currentHandler = _defaultHandler;
      }
    }
  }

})();
