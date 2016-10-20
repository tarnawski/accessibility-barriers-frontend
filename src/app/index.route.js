(function() {
  'use strict';

  angular
    .module('accessibilityBarriers')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($urlRouterProvider) {
    // Default behaviour
    $urlRouterProvider.otherwise('/');
  }

})();
