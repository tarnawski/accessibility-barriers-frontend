(function ()
{
    'use strict';

    angular
        .module('accessibilityBarriers.register')
        .config(routeConfig);

/** @ngInject */
function routeConfig($stateProvider) {
$stateProvider
  .state('register', {
    url: '/register',
    templateUrl: 'app/pages/register/register.html',
    controller: 'RegisterController',
    controllerAs: 'register',
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
