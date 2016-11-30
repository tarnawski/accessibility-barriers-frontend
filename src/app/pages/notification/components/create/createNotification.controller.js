(function () {
    'use strict';

    angular
        .module('accessibilityBarriers.notification')
        .controller('CreateNotificationController', CreateNotificationController);

    /** @ngInject */
    function CreateNotificationController(communicationFactory, $stateParams, $state, $scope) {

        var vm = this;
        vm.mapClicked = false;
        vm.save = save;

        activate();

        ///////////////

        function activate() {
            if ($stateParams.message) {
                vm.successResponse = $stateParams.message;
            }
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
                zoom: 13,
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
                    $state.go('types', {message: 'Błąd aplikacji'});
                }
            );
        }

        function save() {
            var data = {
                name: vm.notification.name,
                description: vm.notification.description,
                latitude: vm.map.marker.latitude,
                longitude: vm.map.marker.longitude,
                category: vm.notification.category
            };

            if(!angular.isUndefined(vm.image)) {
                angular.extend(data, {images: [vm.image.id]});
            }

            communicationFactory.notifications.save(data,
                function (response) {
                    $state.go('notification', {id: response.id});
                },
                function () {
                    $state.go('dashboard');
                }
            );
        }

        function imageUpload(base64) {
            var data = {
                data: base64
            };
            communicationFactory.images.save(data,
                function (response) {
                    vm.image = response;
                },
                function () {
                    $state.go('dashboard');
                }
            );
        }

        $scope.onLoad = function (e, reader, file, fileList, fileOjects, fileObj) {
            imageUpload(fileObj.base64);
        };
    }
})();