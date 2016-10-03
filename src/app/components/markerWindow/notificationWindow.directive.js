(function() {
    angular
        .module('pizzaFrontend')
        .directive('notificationWindow', notificationWindow);

    function notificationWindow() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/markerWindow/notificationWindow.html',
            scope: {
                model: '=',
                show: '='
            },
            controller: NotificationWindowController,
            controllerAs: 'notificationWindow',
            bindToController: true
        };

        return directive;
    }

    function NotificationWindowController($state) {
        var vm = this;

        // View model function
        vm.closeWindow = closeWindow;
        vm.goToNotification = goToNotification;

        /**
         * Close window
         */
        function closeWindow() {
            vm.show = false;
        }


        function goToNotification() {

        }
    }
})();