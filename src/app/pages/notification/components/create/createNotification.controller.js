(function () {
    'use strict';

    angular
        .module('pizzaFrontend.notification')
        .controller('CreateNotificationController', CreateNotificationController);

    /** @ngInject */
    function CreateNotificationController(communicationFactory, $stateParams, $state) {

        var vm = this;
        vm.mapClicked = false;
        vm.save = save;

        activate();

        ///////////////

        function activate() {
            initializeMap();
            getCategories();
        }

        /**
         * Initialize Google map widget
         */
        function initializeMap() {
            vm.map = {
                center: {
                    latitude: 50.036454,
                    longitude: 22.005916
                },
                zoom: 14,
                marker: {},
                events: {
                    click: function (mapObject, eventName, originalEventArgs) {
                        var e = originalEventArgs[0];
                        vm.map.marker = {
                            latitude: e.latLng.lat(),
                            longitude: e.latLng.lng()
                        };
                        mapObject.panTo(new google.maps.LatLng(vm.map.marker.latitude, vm.map.marker.longitude));
                        vm.mapClicked = true;
                    }
                }
            }
        }

        function getCategories() {
            communicationFactory.categories.query(
                function (data) {
                    vm.categories = data;
                },
                function () {
                    $state.go('types', { message: 'Błąd aplikacji' });
                }
            );
        }

        function select() {
            console.log(selected);
        }

        function save() {

        }
    }
})();