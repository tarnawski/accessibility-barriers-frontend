(function ()
{
    'use strict';

    angular
        .module('accessibilityBarriers.about')
        .config(routeConfig);

/** @ngInject */
function routeConfig($stateProvider) {
$stateProvider
  .state('about', {
    url: '/about',
    templateUrl: 'app/pages/about/about.html',
    controller: 'AboutController',
    controllerAs: 'about',
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
