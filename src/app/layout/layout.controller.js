(function() {
  'use strict';

  angular
    .module('fallout4CoolTools.layout')
    .controller('LayoutController', [
      '$rootScope',
      '$q',
      '$state',
      '$mdSidenav',
      '$translate',
      'F4ctAuth',
      'breadCrumbModelService',
      'ToastService',
      'i18nService',
      'menuStates',
      LayoutController
    ]);

  function LayoutController(
    $rootScope,
    $q,
    $state,
    $mdSidenav,
    $translate,
    F4ctAuth,
    breadCrumbModelService,
    ToastService,
    i18nService,
    menuStates
  ) {
    var _this = this;

    _this.toggleNavbar = toggleNavbar;

    _this.userHasAuthRights = userHasAuthRights;

    _this.logout = logout;

    _this.querySearch = querySearch;
    _this.changeLang = changeLang;

    return init();

    function init() {

      $rootScope.bcModel = breadCrumbModelService.model;

      _this.menuStates = menuStates;

      _this.langs        = i18nService.getLangList();
      _this.selectedItem = _.find(_this.langs, 'lang', $translate.use());

      $rootScope.$on('$translateChangeSuccess', function(e, data) {
        _this.selectedItem = _.find(_this.langs, 'lang', data.language);
      });

    }

    function toggleNavbar() {
      var defer = $q.defer();
      $mdSidenav('mainMenu').toggle().then(function() {
        defer.resolve();
      });
      return defer.promise;
    }

    function userHasAuthRights(menuState) {
      var state = $state.get(menuState.state);
      if (_.isBoolean(state.data.requireAuth)) {
        var authData = F4ctAuth.$getAuth();
        if (authData) {
          return state.data.requireAuth === true;
        } else {
          return state.data.requireAuth === false;
        }
      }
      return true;
    }

    function logout() {
      var hasError,
          cancel = $rootScope.$on('requireAuthPageError', onPageError),
          authCancel = F4ctAuth.$onAuth(onAuth);
      
      F4ctAuth.$unauth();

      function onAuth(auth) {
        if (!auth && !hasError) {
          ToastService.simple('fallout4CoolTools.layout.messages.logout');
        }
        cancel();
        authCancel();
      }

      function onPageError() {
        hasError = true;
      }
    }

    function querySearch (query) {
      return query ? _this.langs.filter( _createFilterFor(query)) : _this.langs;
    }

    function changeLang($item) {
      if ($item && $translate.use() !== $item.lang) {
        toggleNavbar().then(function() {
          $translate.use($item.lang);
        });
      }
    }

    function _createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);
      return function filterFn(lang) {
        return lang.lang.indexOf(lowercaseQuery) !== -1 ||
               angular.lowercase(lang.translation).indexOf(lowercaseQuery) !== -1;
      };

    }

  }
})();
