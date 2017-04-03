(function() {
  'use strict';

  angular
    .module('accessibilityBarriers.about')
    .controller('AboutController', AboutController);

  /** @ngInject */
  function AboutController(communicationFactory, $state) {

      var vm = this;
      vm.subscribe = subscribe;
      vm.isSubscribe = false;

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

      function subscribe() {
          var data = {
              email: vm.email
          };


          communicationFactory.subscribers.save(data,
              function () {
                  vm.isSubscribe = true;
              },
              function () {
                  vm.isSubscribe = true;
              }
          );
      }
  }
})();
