(function () {
  'use strict';

  angular
    .module('pizzaFrontend.notification')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('notification', {
        url: '/notifications/:id',
        templateUrl: 'app/pages/notification/notification.html',
        controller: 'NotificationController',
        controllerAs: 'notification',
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
