(function() {
  'use strict';

  angular.module('fallout4CoolTools.components.ui.directives.smartField')
    .directive('smartField', ['$animate', smartFieldDirective])
  ;

  function smartFieldDirective($animate) {
    return {
      restrict : 'A',
      compile  : compile
    };

    function compile($element) {
      var _input = $($element.find('input,select,textarea').get(0)),
          _config,
          _elementKey;

      if (!_input.length) {
        console.warn('no input');
        return;
      }

      _config = _makeConfig();

      if (!_.keys(_config).length) {
        console.warn('no validation');
        return;
      }

      _elementKey = _determineElementKey();

      if (!_elementKey || !_elementKey.length) {
        console.warn('couldn\'t determine key');
        return;
      }

      if (_config.email) {
        _input.attr('email-override', '');
      }

      _injectMessages();

      return link;

      function _makeConfig() {
        var config = {};

        if (_input.attr('required') || _input.attr('ng-required')) {
          config.required = true;
        }

        if (_input.attr('ng-minlength') && (_input.attr('maxlength') || _input.attr('ng-maxlength'))) {
          config.rangelength = {
            min : _input.attr('ng-minlength'),
            max : _input.attr('maxlength') || _input.attr('ng-maxlength')
          };
        } else if (_input.attr('ng-minlength')) {
          config.minlength = _input.attr('ng-minlength');
        } else if (_input.attr('maxlength') || _input.attr('ng-maxlength')) {
          config.maxlength = _input.attr('maxlength') || _input.attr('ng-maxlength');
        }

        if (_input.attr('type') === 'email') {
          config.email = true;
        }

        if (_input.attr('type') === 'number') {
          config.number = true;
          if (_input.attr('min') && _input.attr('max')) {
            config.rangenumber = {
              min : _input.attr('min'),
              max : _input.attr('max')
            };
          } else if (_input.attr('min')) {
            config.min = _input.attr('min');
          } else if (_input.attr('max')) {
            config.max = _input.attr('max');
          }
        }

        return config;
      }

      function _determineElementKey() {
        var _parentForms = _input.parents('form,[ng-form]'),
            _workKey = '';

        if (_parentForms.length) {
          angular.forEach(_parentForms, function(form) {
            var formEl = $(form);
            _workKey = (formEl.attr('ng-form') || formEl.attr('name')) + '.' + _workKey;
          });
          return _workKey + _input.attr('name');
        } else {
          return null;
        }
      }

      function _injectMessages() {
        var _messagesTemplate = 
              '<div ' +
                   'ng-messages="' + _elementKey + '.$error" ' +
                   'ng-if="' + _elementKey + '.$dirty" ' +
                   'role="alert">' +
              '</div>',
            _messagesEl = $(_messagesTemplate),
            _smartFieldTarget = $element.find('smart-field-target');

        if (_smartFieldTarget.length) {
          $animate.enter(_messagesEl, null, _smartFieldTarget);
          _smartFieldTarget.remove();
        } else {
          $animate.enter(_messagesEl, null, _input);
        }


        _.forOwn(_config, function(value, key) {
          var messageEl = $('<div ng-message="' + key + '"></div>'),
              spanEl = $('<span translate>fallout4CoolTools.layout.common.errors.' + key + '</span>');
          $animate.enter(spanEl, messageEl);
          $animate.enter(messageEl, _messagesEl);

          if (key === 'rangelength') {
            spanEl.attr(
              'translate-values',
              '{ min : ' + value.min + ', max : ' + value.max + '}'
            );
          } else if (_.endsWith(key, 'length')) {
            spanEl.attr('translate-values', '{' + key.substring(0, key.indexOf('length')) + ' : ' + value + '}');
          }

          if (key === 'rangenumber') {
            spanEl.attr(
              'translate-values',
              '{ min : ' + value.min + ', max : ' + value.max + '}'
            );
          } else if (key === 'min' || key === 'max') {
            spanEl.attr('translate-values', '{ ' + key + ' : ' + value + '}');
          }

        });
      }

      function link(scope) {
        var parentDiv = $(_input.parents('div').get(0)),
            cancel;

        cancel = scope.$watch(_elementKey + '.$invalid && ' + _elementKey + '.$dirty', function(newValue) {
          if (newValue && !parentDiv.hasClass('has-error')) {
            parentDiv.addClass('has-error');
          } else {
            parentDiv.removeClass('has-error');
          }
        });
        scope.$on('$destroy', function() {
          cancel();
        });
      }

    }

  }

})();
