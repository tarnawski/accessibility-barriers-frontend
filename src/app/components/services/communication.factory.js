(function ()
{
    'use strict';
    angular
        .module('accessibilityBarriers')
        .service('communicationFactory', communicationFactory);

    /** @ngInject */
    function communicationFactory($resource, CONSTANTS) {
        return {
            categories: $resource(CONSTANTS.BASE_URL_API + '/api/categories/:id',{id: '@_id'}, {
              update: {
                method: 'PUT'
              }
            }),
            notifications: $resource(CONSTANTS.BASE_URL_API + '/api/notifications/:id',{id: '@_id'}, {
                update: {
                    method: 'PUT'
                }
            }),
            comments: $resource(CONSTANTS.BASE_URL_API + '/api/notifications/:id/comments',{id: '@_id'}, {
                update: {
                    method: 'PUT'
                }
            }),
            ratings: $resource(CONSTANTS.BASE_URL_API + '/api/notifications/:id/ratings',{id: '@_id'}),
            profile: $resource(CONSTANTS.BASE_URL_API + '/api/profile',{}, {
                update: {
                    method: 'PUT'
                }
            }),
            alerts: $resource(CONSTANTS.BASE_URL_API + '/api/alerts',{}, {
                update: {
                    method: 'PUT'
                }
            }),
            images: $resource(CONSTANTS.BASE_URL_API + '/api/images'),
            status: $resource(CONSTANTS.BASE_URL_API + '/api/status'),
            near: $resource(CONSTANTS.BASE_URL_API + '/api/notifications/near')
        };
    }
})();
