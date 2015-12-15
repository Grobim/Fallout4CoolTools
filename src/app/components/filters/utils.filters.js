(function() {
  'use strict';

  angular.module('fallout4CoolTools.components.filters')
    .filter('replaceChars', [ReplaceCharFilter])
    .filter('length', [LengthFilter])
    .filter('omitFromField', [OmitFromFieldFilter])
    .filter('nospace', [NoSpaceFilter])
    .filter('humanizeDoc', [HumanizeDocFilter])
    .filter('trunc', [TruncFilter])
    .filter('capitalize', [CapitalizeFilter])
  ;

  function ReplaceCharFilter() {
    return function(input, searchValue, newValue) {
      return (input || '').split(searchValue).join(newValue);
    };
  }

  function LengthFilter() {
    return function(input) {
      return _.size(input);
    };
  }

  function OmitFromFieldFilter() {
    return function(inputList, filtered, filteredField) {
      return _.reject(inputList, function(inputListItem) {
        if (_.isArray(filtered)) {
          return _.find(filtered, filteredField, _.get(inputListItem, filteredField));
        } else {
          return _.get(filtered, filteredField) === _.get(inputListItem, filteredField);
        }
      });
    };
  }

  function NoSpaceFilter() {
    return function (value) {
      return (!value) ? '' : value.replace(/ /g, '');
    };
  }

  function HumanizeDocFilter() {
    return function (doc) {
      if (!doc) {
        return;
      }
      if (doc.type === 'directive') {
        return doc.name.replace(/([A-Z])/g, function ($1) {
          return '-' + $1.toLowerCase();
        });
      }
      return doc.label || doc.name;
    };
  }

  function TruncFilter() {
    return function(input, length) {
      return _.trunc(input, length);
    };
  }

  function CapitalizeFilter() {
    return function(input) {
      return _.capitalize(input);
    };
  }

})();
