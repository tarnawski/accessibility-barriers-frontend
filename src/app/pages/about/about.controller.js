(function() {
  'use strict';

  angular
    .module('accessibilityBarriers.about')
    .controller('AboutController', AboutController);

  /** @ngInject */
  function AboutController(communicationFactory, $state) {

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
