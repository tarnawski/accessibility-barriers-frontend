(function ()
{
    'use strict';

    angular
        .module('accessibilityBarriers.subscribe')
        .config(routeConfig);

/** @ngInject */
function routeConfig($stateProvider) {
$stateProvider
  .state('subscribe', {
    url: '/subscribe/:secret',
    templateUrl: 'app/pages/subscribe/subscribe.html',
    controller: 'SubscribeController',
    controllerAs: 'subscribe',
    params: {
      message: null
    },
    resolve: {
      message: /* @ngInject */
        function ($stateParams) {
          return $stateParams.message;
        }
    },
    data: {
      requireAuth: false
    }
  });
}

})();
