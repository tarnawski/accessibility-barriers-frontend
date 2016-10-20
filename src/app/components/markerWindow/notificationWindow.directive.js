(function() {
    angular
        .module('accessibilityBarriers')
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

    function NotificationWindowController() {
        var vm = this;

        // View model function
        vm.closeWindow = closeWindow;

        /**
         * Close window
         */
        function closeWindow() {
            vm.show = false;
        }
    }
})();