(function() {
  'use strict';

  angular
    .module('pizzaFrontend', [
      // Plugins
      'ngAnimate',
      'ngCookies',
      'ngTouch',
      'ngSanitize',
      'ngMessages',
      'ngAria',
      'ngResource',
      'ui.router',
      'ui.bootstrap',
      'toastr',
      'toaster',
      'angular-storage',
      'ui.select',
      'uiGmapgoogle-maps',
      'geolocation',
      'ui.gravatar',

      // App modules
      'pizzaFrontend.login',
      'pizzaFrontend.dashboard',
      'pizzaFrontend.profile',
      'pizzaFrontend.register',
      'pizzaFrontend.notification',
      'pizzaFrontend.about'
    ]);

})();
