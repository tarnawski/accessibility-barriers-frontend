(function () {
  'use strict';

  angular
    .module('pizzaFrontend.notification')
    .controller('NotificationController', NotificationController);

  /** @ngInject */
  function NotificationController(communicationFactory) {

    var vm = this;

    activate();

    ///////////////

    function activate() {
      initializeMap();
      getNotification();
    }


    /**
     * Initialize Google map widget
     */
    function initializeMap() {
      vm.map = {
        center: {
          latitude: 50.035061,
          longitude: 22.002783
        },
        zoom: 14,
        options: {
          disableDefaultUI: true
        },
        markersEvents: {
          click: function (marker, eventName, model) {

          }
        }
      };
    }

    function getNotification() {
      communicationFactory.notifications.query(
          function (data) {
            vm.notifications = data;
          },
          function () {
            $state.go('types', { message: 'Błąd aplikacji' });
          }
      );
    }
  }
})();
