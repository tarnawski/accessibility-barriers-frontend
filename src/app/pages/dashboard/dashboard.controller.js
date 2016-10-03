(function () {
  'use strict';

  angular
    .module('pizzaFrontend.dashboard')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController(communicationFactory, $state) {

    var vm = this;

    // View model functions
    vm.selectCategory = selectCategory;
    vm.selectNotification = selectNotification;
    vm.backToCategory = backToCategory;

    activate();

    ///////////////

    function activate() {

      vm.categoryList = true;
      vm.notificationList = false;

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
          latitude: 50.036454,
          longitude: 22.005916
        },
        zoom: 14,
        options: {
          disableDefaultUI: true
        },
        markersEvents: {
          click: function (marker, eventName, model) {
            vm.map.window.show = true;
            vm.map.window.model = model;
          }
        },
        window: {
          marker: {},
          show: false,
          closeClick: function () {
            vm.map.window.show = false;
          },
          options: {
            pixelOffset: {
              width: 0,
              height: -40
            }
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

    function selectCategory(id) {
      communicationFactory.categories.get({ id: id },
          function (data) {
            vm.categoryList = false;
            vm.notificationList = true;
            vm.notifications = data.notifications;
          },
          function () {
            $state.go('types', { message: 'Błąd aplikacji' });
          }
      );
    }

    function selectNotification(id) {
      $state.go('notification', { id: id });
    }

    function backToCategory() {
      activate();
    }
  }
})();
