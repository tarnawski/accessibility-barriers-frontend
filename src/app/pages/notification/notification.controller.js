(function () {
  'use strict';

  angular
    .module('pizzaFrontend.notification')
    .controller('NotificationController', NotificationController);

  /** @ngInject */
  function NotificationController(communicationFactory, $stateParams) {

    var vm = this;

    activate();

    ///////////////

    function activate() {
      getNotification($stateParams.id);
      initializeMap();
    }

    /**
     * Initialize Google map widget
     */
    function initializeMap() {
      vm.map = {
        center: {
          latitude: 50.036454,
          longitude: 22.005916
        },
        zoom: 14,
        options: {
          disableDefaultUI: true
        },
        control: {}
      };
    }

    function getNotification(id) {
      communicationFactory.notifications.get({ id: id },
          function (data) {
            vm.notification = data;
          },
          function () {
            $state.go('dashboard');
          }
      );
    }
  }
})();
