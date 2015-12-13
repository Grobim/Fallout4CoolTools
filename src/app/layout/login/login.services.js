(function() {
  'use strict';

  angular.module('fallout4CoolTools.layout.login')
    .service('LoginRooterService', ['$state', LoginRooterService])
  ;

  function LoginRooterService($state) {
    var _previousState,
        _previousParams,
        _nextState,
        _nextParams;
    return {
      previousState : previousState,
      nextState     : nextState,
      clear         : clear,
      clearPrevious : clearPrevious,
      clearNext     : clearNext,
      goToNextState : goToNextState
    };

    function previousState(stateSet, paramsSet) {
      if (stateSet) {
        _previousState = stateSet;
        if (paramsSet) {
          _previousParams = paramsSet;
        }
      }
      return {
        state  : _previousState,
        params : _previousParams
      };
    }

    function nextState(stateSet, paramsSet) {
      if (stateSet) {
        _nextState = stateSet;
        if (paramsSet) {
          _nextParams = paramsSet;
        }
      }
      return {
        state  : _nextState,
        params : _nextParams
      };
    }

    function clear() {
      clearPrevious();
      clearNext();
    }

    function clearPrevious() {
      _previousState = null;
      _previousParams = null;
    }

    function clearNext() {
      _nextState = null;
      _nextParams = null;
    }

    function goToNextState() {
      if (_nextState) {
        $state.go(_nextState, _nextParams);
        clearNext();
      } else if (_previousState) {
        $state.go(_previousState, _previousParams);
        clearPrevious();
      } else {
        $state.go('fallout4CoolTools.home');
      }
    }

  }

})();
