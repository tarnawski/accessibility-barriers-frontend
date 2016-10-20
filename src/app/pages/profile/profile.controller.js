(function () {
    'use strict';

    angular
        .module('accessibilityBarriers.profile')
        .controller('ProfileController', ProfileController);

    /** @ngInject */
    function ProfileController(communicationFactory, store, $stateParams) {

        var vm = this;
        vm.update = update;

        activate();

        function activate() {
            vm.currentUser = store.get('currentUser');
            if ($stateParams.message) {
                vm.successResponse = $stateParams.message;
            }
        }

        function setErrorMessage(error) {
            vm.successResponse = "";
            vm.errorResponse = error;
        }

        function setSuccessMessage(message) {
            vm.successResponse = message;
            vm.errorResponse = "";
        }

        function update() {
            var data = {
                first_name: vm.currentUser.first_name,
                last_name: vm.currentUser.last_name,
                email: vm.currentUser.email,
                email_notification: vm.currentUser.email_notification
            };

            communicationFactory.profile.update(data,
                function () {
                    store.set('currentUser', vm.currentUser);
                    setSuccessMessage('Dane zostały aktualizowane');
                },
                function () {
                    setErrorMessage('Błąd aplikacji');
                });
        }
    }
})();
