(function () {
  'use strict';

  angular
    .module('accessibilityBarriers.notificationList')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('list', {
        url: '/list',
        templateUrl: 'app/pages/notificationList/notificationList.html',
        controller: 'NotificationListController',
        controllerAs: 'list',
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
