(function() {
  'use strict';

  angular
    .module('accessibilityBarriers')
    .config(config);

  /** @ngInject */
  function config($logProvider, $httpProvider, gravatarServiceProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Push interceptor
    $httpProvider.interceptors.push('authInterceptor');

      gravatarServiceProvider.defaults = {
          size     : 100,
          "default": 'identicon'
      };

  }

})();
