(function() {
  'use strict';

  angular
    .module('accessibilityBarriers')
    .directive('ratingNotification', ratingNotification);

  /** @ngInject */
  function ratingNotification() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/directives/ratingNotification/ratingNotification.html',
      scope: {
        model: '='
      },
      controller: ratingNotificationController,
      controllerAs: 'rating',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function ratingNotificationController(communicationFactory, store, $state) {

      var vm = this;
      vm.rate = rate;

      activate();

      ////////////

      function activate() {
          vm.hover = 0;
          vm.currentUser  = store.get('currentUser');
          getRating(vm.model);
      }

      function getRating(id) {
            communicationFactory.notifications.get({ id: id },
                function (data) {
                    vm.rating = data.rating;
                },
                function () {
                    $state.go('dashboard');
                }
            );
      }

      function rate(value) {
          communicationFactory.ratings.save({id: vm.model}, {value: value},
              function () {
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
