(function() {
  'use strict';

  angular.module('fallout4CoolTools.layout')
    .run([
      '$rootScope',
      '$state',
      'F4ctAuth',
      'ToastService',
      LoginRouteInterceptor
    ])
  ;

  function LoginRouteInterceptor(
    $rootScope,
    $state,
    F4ctAuth,
    ToastService
  ) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState) {

      if (_.isBoolean(toState.data.requireAuth)) {
        if (_.isObject(F4ctAuth.$getAuth()) !== toState.data.requireAuth) {
          event.preventDefault();

          if (toState.data.requireAuth) {
            ToastService.simple('fallout4CoolTools.layout.common.errors.rooting.requireAuth');
          } else {
            ToastService.simple('fallout4CoolTools.layout.common.errors.rooting.requireUnauth');
          }
          if (!fromState.name || !fromState.name.length) {
            $state.go('fallout4CoolTools.home');
          }
        }

      }

    });

    F4ctAuth.$onAuth(function(auth) {
      if (
        $state.current &&
        $state.current.name !== 'fallout4CoolTools.login' &&
        $state.current.data &&
        _.isBoolean($state.current.data.requireAuth) &&
        _.isObject(auth) !== $state.current.data.requireAuth
      ) {
        if ($state.current.data.requireAuth) {
          ToastService.simple('fallout4CoolTools.layout.common.errors.rooting.requireAuth');
          $state.go('fallout4CoolTools.home');
        } else {
          ToastService.simple('fallout4CoolTools.layout.common.errors.rooting.requireUnauth');
          $state.go('fallout4CoolTools.home');
        }
        $rootScope.$emit('requireAuthPageError');
      }
    });
  }

})();
