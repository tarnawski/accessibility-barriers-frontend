(function() {
  'use strict';

  angular
    .module('pizzaFrontend.about')
    .controller('AboutController', AboutController);

  /** @ngInject */
  function AboutController(communicationFactory) {

      var vm = this;

      activate();

      ///////////////

      function activate() {
          getStatus();
      }

      function getStatus() {
          communicationFactory.status.get(
              function (data) {
                  vm.status = data;
              },
              function () {
                  $state.go('dashboard');
              }
          );
      }
  }
})();
