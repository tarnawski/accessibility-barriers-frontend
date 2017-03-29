(function () {
  'use strict';

  angular
    .module('accessibilityBarriers.notification')
    .controller('NotificationController', NotificationController);

  /** @ngInject */
  function NotificationController(communicationFactory, $stateParams, $location, $state, Lightbox) {

    var vm = this;
    // View model functions
    vm.openLightboxModal = openLightboxModal;

    activate();

    ///////////////

    function activate() {
      vm.currentUrl = $location.absUrl();
      vm.modelId = $stateParams.id;
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
        zoom: 13,
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

    function openLightboxModal() {
        console.log(vm.notification.images[0].original)
        Lightbox.openModal([{
            'url': vm.notification.images[0].original
        }], 0);
    }
  }
})();
