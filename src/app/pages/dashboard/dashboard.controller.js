(function () {
  'use strict';

  angular
    .module('pizzaFrontend.dashboard')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController(communicationFactory) {

    var vm = this;

    // View model functions
    vm.selectCategory = selectCategory;

    activate();

    ///////////////

    function activate() {
      initializeMap();
      getCategories();
      getNotifications();
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
            showNotificationDetails(model.id);
          }
        }
      };
    }

    function getCategories() {
      communicationFactory.categories.query(
          function (data) {
            vm.categories = data;
          },
          function () {
            $state.go('types', { message: 'Błąd aplikacji' });
          }
      );
    }

    function getNotifications() {
      communicationFactory.notifications.query(
          function (data) {
            vm.notifications = data;
          },
          function () {
            $state.go('types', { message: 'Błąd aplikacji' });
          }
      );
    }

    function showNotificationDetails(id) {
      vm.details = true;
      communicationFactory.notifications.get({ id: id },
          function (data) {
            vm.notification = data;
          },
          function () {
            $state.go('types', { message: 'Błąd aplikacji' });
          }
      );
    }

    function selectCategory(id) {
      communicationFactory.categories.get({ id: id },
          function (data) {
            vm.notifications = data.notifications;
          },
          function () {
            $state.go('types', { message: 'Błąd aplikacji' });
          }
      );
    }
  }
})();
