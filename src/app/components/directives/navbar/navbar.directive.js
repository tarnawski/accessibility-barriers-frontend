(function() {
  'use strict';

  angular
    .module('accessibilityBarriers')
    .directive('navbar', navbar);

  /** @ngInject */
  function navbar($state, authService, store, communicationFactory) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/directives/navbar/navbar.html',
      controller: navbarController,
      controllerAs: 'navbar',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function navbarController() {

      var vm = this;

      vm.logout = logoutUser;

      activate();

      ////////////

      function activate() {
        vm.currentUser  = store.get('currentUser');
          if(angular.isObject(vm.currentUser)) {
              getAlerts();
          }
      }

      function getAlerts() {
        communicationFactory.alerts.query(
            function (data) {
              vm.alerts = data;
            },
            function () {
              $state.go('dashboard');
            }
        );
      }

      function logoutUser() {
        authService.logout();
        $state.go('login', {message: 'Zostałeś popranie wylogowany'});
      }
    }
  }

})();
