(function() {
  'use strict';

  angular.module('fallout4CoolTools.components.i18n')
    .run([
      '$state',
      '$rootScope',
      '$stateParams',
      '$location',
      '$translate',
      'i18nService',
      I18nRun
    ])
  ;

  function I18nRun(
    $state,
    $rootScope,
    $stateParams,
    $location,
    $translate,
    i18nService
  ) {

      $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {

        if (toState === fromState &&
            fromParams.langKey !== toParams.langKey &&
            fromParams.langKey === $translate.use()) {
          // Lang change required from url change
          if (i18nService.isValidLangKey(toParams.langKey)) {
            $translate.use(toParams.langKey);
          } else {
            // If invalid key => fallBack language
            $translate.use($translate.fallbackLanguage());
          }
        } else if ($stateParams.langKey !== undefined &&
                   $stateParams.langKey !== $translate.use()) {
          // Url change required from translate change
          var outUrl = $location.url().replace('/' + $stateParams.langKey, '/' + $translate.use());
          $location.url(outUrl);
        }

      });

      $rootScope.$on('$translateChangeSuccess', function(e, data) {
        if ($state.current.name.length && data.language !== $stateParams.langKey) {
          $state.go($state.current.name, _.assign({}, $stateParams, {langKey: data.language}));
        }
      });

  }

})();
