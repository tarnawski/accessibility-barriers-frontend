(function() {
  'use strict';

  angular
    .module('pizzaFrontend')
    .directive('ratingNotification', ratingNotification);

  /** @ngInject */
  function ratingNotification() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/ratingNotification/ratingNotification.html',
      scope: {
        model: '='
      },
      controller: ratingNotificationController,
      controllerAs: 'rating',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function ratingNotificationController(communicationFactory) {

      var vm = this;
      vm.rate = rate;

      activate();

      ////////////

      function activate() {
          vm.hover = 0;
          getRating(vm.model);
      }

      function getRating(id) {
            communicationFactory.notifications.get({ id: id },
                function (data) {
                    console.log(data.rating);
                    vm.rating = data.rating;
                },
                function () {
                    $state.go('dashboard');
                }
            );
      }

      function rate(value) {
          communicationFactory.ratings.save({id: vm.model}, {value: value},
              function (response) {
                  getRating(vm.model);
              },
              function () {
                  $state.go('dashboard');
              }
          );
      }
    }
  }

})();
