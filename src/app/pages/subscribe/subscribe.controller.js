(function() {
  'use strict';

  angular
    .module('accessibilityBarriers.subscribe')
    .controller('SubscribeController', SubscribeController);

  /** @ngInject */
  function SubscribeController(communicationFactory, $stateParams) {

      var vm = this;
      vm.isUnSubscribe = false;
      vm.unSubscribe = unSubscribe;

      activate();

      ///////////////

      function activate() {
          vm.secret = $stateParams.secret;
      }

      function unSubscribe() {
          communicationFactory.subscribers.delete({secret: vm.secret},
              function () {
                  vm.isUnSubscribe = true;
              },
              function () {
                  vm.isUnSubscribe = true;
              }
          );
      }
  }
})();
