(function() {
  'use strict';

  angular
    .module('accessibilityBarriers')
    .directive('commentNotification', commentNotification);

  /** @ngInject */
  function commentNotification() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/commentNotification/commentNotification.html',
      scope: {
        model: '='
      },
      controller: commentNotificationController,
      controllerAs: 'comment',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function commentNotificationController(communicationFactory, store, $state) {

      var vm = this;
      vm.addComment = addComment;

      activate();

      ////////////

      function activate() {
          getComments(vm.model);
          vm.currentUser  = store.get('currentUser');
      }

      function getComments(id) {
            communicationFactory.comments.query({ id: id },
                function (data) {
                    vm.comments = data;
                },
                function () {
                    $state.go('dashboard');
                }
            );
      }

      function addComment() {
          var data = {
            content: vm.comment.content
          };
          communicationFactory.comments.save({ id: vm.model }, data,
              function () {
                  vm.comment.content = '';
                  getComments(vm.model);
              },
              function () {
                  $state.go('dashboard');
              }
          );
      }
    }
  }

})();
