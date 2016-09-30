(function ()
{
    'use strict';
    angular
        .module('pizzaFrontend')
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
            })
        };
    }
})();
