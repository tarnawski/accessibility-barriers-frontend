(function () {
  'use strict';

  angular
    .module('pizzaFrontend.profile')
    .controller('ProfileController', ProfileController);

  /** @ngInject */
  function ProfileController(store) {

    var vm = this;

    activate();

    function activate() {
      vm.currentUser  = store.get('currentUser');
    }
  }
})();
