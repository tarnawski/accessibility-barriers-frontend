(function() {
  'use strict';

  angular
    .module('pizzaFrontend')
    .directive('nearNotification', nearNotification);

  /** @ngInject */
  function nearNotification() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/nearNotification/nearNotification.html',
      scope: {
          latitude: '=',
          longitude: '=',
          limit: '='
      },
      controller: nearNotificationController,
      controllerAs: 'near',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function nearNotificationController(communicationFactory, $state) {

      var vm = this;

      activate();

      ////////////

      function activate() {
          getNearNotifications(vm.latitude, vm.longitude, vm.limit);
      }

      function getNearNotifications(latitude, longitude, limit) {
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
  }

})();
