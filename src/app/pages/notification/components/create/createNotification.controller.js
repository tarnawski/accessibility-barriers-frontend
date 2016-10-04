(function () {
    'use strict';

    angular
        .module('pizzaFrontend.notification')
        .controller('CreateNotificationController', CreateNotificationController);

    /** @ngInject */
    function CreateNotificationController(communicationFactory, $stateParams, $state) {

        var vm = this;
        vm.save = save;
        vm.coordinates = 'sdfsdfsdf';
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
                events: {
                    click: function (map, eventName, originalEventArgs) {
                        var e = originalEventArgs[0];
                        var lat = e.latLng.lat(),lon = e.latLng.lng();
                        vm.map.marker = {
                            coordinates: {
                                latitude: lat,
                                longitude: lon
                            }
                        };
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

        function save() {

        }
    }
})();