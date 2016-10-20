(function () {
  'use strict';

  angular
    .module('accessibilityBarriers.notificationList')
    .controller('NotificationListController', NotificationListController);

  /** @ngInject */
  function NotificationListController(communicationFactory, $state) {

    var vm = this;

    activate();

    ///////////////

    function activate() {
      getNotifications();
    }

    function getNotifications() {
      communicationFactory.notifications.query(
          function (data) {
            vm.notifications = data;
          },
          function () {
            $state.go('dashboard');
          }
      );
    }
  }
})();
