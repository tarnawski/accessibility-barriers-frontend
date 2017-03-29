(function() {
  'use strict';

  angular
    .module('accessibilityBarriers.register')
    .controller('RegisterController', RegisterController);

  /** @ngInject */
  function RegisterController(authService, $state, $stateParams) {

    var vm = this;
    vm.register = register;
    vm.validateInputs = validateInputs;

    activate();

    ////////////////

    function activate() {
      if($stateParams.message) {
        vm.successResponse = $stateParams.message;
      }
    }

    function register() {
      authService.register(vm.user)
          .then(function () {
              $state.go('login', { message: 'Poprawnie zarejestrowano, możesz się teraz zalogować'});
          }, function () {
              setErrorMessage();
          });
    }

    function setErrorMessage() {
      vm.successResponse = "";
      vm.errorResponse = "Adres email został już użyty";
    }

    function validateInputs() {
      return angular.isDefined(vm.user) &&
        angular.isString(vm.user.firstName) &&
        angular.isString(vm.user.lastName) &&
        angular.isString(vm.user.address) &&
        angular.isString(vm.user.password) &&
        angular.isString(vm.user.passwordRepeat) &&
        angular.equals(vm.user.password, vm.user.passwordRepeat);
    }

  }
})();
