(function() {
  'use strict';

  angular
    .module('accessibilityBarriers', [
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
      '720kb.socialshare',
      'naif.base64',

        // App modules
      'accessibilityBarriers.login',
      'accessibilityBarriers.dashboard',
      'accessibilityBarriers.profile',
      'accessibilityBarriers.register',
      'accessibilityBarriers.notification',
      'accessibilityBarriers.about',
      'accessibilityBarriers.notificationList'
    ]);

})();
