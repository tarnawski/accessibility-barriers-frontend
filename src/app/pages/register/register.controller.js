(function() {
  'use strict';

  angular
    .module('pizzaFrontend.register')
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
        .catch(setErrorMessage);

      $state.go('login', { message: 'Poprawnie zarejestrowano, możesz się teraz zalogować'});
    }

    function setErrorMessage(error) {
      vm.successResponse = "";
      vm.errorResponse = "Nazwa użytkownika lub adres email jest już zarezerwowany";
    }

    function validateInputs() {
      return angular.isDefined(vm.user) &&
        angular.isString(vm.user.firstName) &&
        angular.isString(vm.user.lastName) &&
        angular.isString(vm.user.username) &&
        angular.isString(vm.user.address) &&
        angular.isString(vm.user.password);
    }

  }
})();
