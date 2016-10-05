(function() {
  'use strict';

  angular
    .module('pizzaFrontend')
    .directive('navbar', navbar);

  /** @ngInject */
  function navbar($state, authService, store, communicationFactory) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      controller: navbarController,
      controllerAs: 'navbar',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function navbarController() {

      var vm = this;

      vm.logout = logoutUser;
      vm.refreshNotifications = refreshNotifications;

      activate();

      ////////////

      function activate() {
        vm.currentUser  = store.get('currentUser');
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

      function refreshNotifications(query){
        communicationFactory.notifications.query({query: query},
            function (data) {
              vm.notifications = data;
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
