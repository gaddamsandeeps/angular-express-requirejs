define(['mod1/controllers/firstController',
    'mod1/controllers/secondController',
    'uiRouter',
    'jquery',
    'uiRouterStyles'
], function() {
    var defaultapp = angular.module('AR', ['ui.router', 'uiRouterStyles', 'controllerModule']);
    return defaultapp;
});
