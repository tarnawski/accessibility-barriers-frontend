(function () {
  'use strict';

  angular
    .module('accessibilityBarriers.notification')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('notification', {
        url: '/notification/:id',
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
      })
      .state('create_notification', {
        url: '/create',
        templateUrl: 'app/pages/notification/components/create/createNotification.html',
        controller: 'CreateNotificationController',
        controllerAs: 'createNotification',
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
            requireAuth: true
        }
    });
  }

})();
