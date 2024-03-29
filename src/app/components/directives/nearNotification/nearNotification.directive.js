(function() {
  'use strict';

  angular
    .module('accessibilityBarriers')
    .directive('nearNotification', nearNotification);

  /** @ngInject */
  function nearNotification() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/directives/nearNotification/nearNotification.html',
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
          communicationFactory.near.query({
                latitude: latitude,
                longitude: longitude,
                limit: limit
            },
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
