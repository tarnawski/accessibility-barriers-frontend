(function() {
  'use strict';

  angular
    .module('accessibilityBarriers.subscribe')
    .controller('SubscribeController', SubscribeController);

  /** @ngInject */
  function SubscribeController(communicationFactory, $stateParams) {

      var vm = this;

      activate();

      ///////////////

      function activate() {
          var secret = $stateParams.secret;
          unSubscribe(secret);
      }

      function unSubscribe(secret) {
          communicationFactory.subscribers.delete({secret: secret},
              function () {
                  vm.isUnSubscribe = true;
              },
              function () {
                  vm.isUnSubscribe = false;
              }
          );
      }
  }
})();
