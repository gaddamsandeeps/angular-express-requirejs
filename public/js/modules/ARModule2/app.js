define(['mod2/controllers/thirdController',
    'mod2/controllers/fourthController',
    'uiRouter',
    'jquery',
    'uiRouterStyles'
], function() {
    var defaultapp = angular.module('AR', ['ui.router', 'uiRouterStyles', 'controllerModule']);
    return defaultapp;
});
