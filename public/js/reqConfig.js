require.config({
    baseUrl : "js",
    paths: {
        "appMod": "modules/ARModule1/app",
        "configMod": "modules/ARModule1/config",

        "appMod2": "modules/ARModule2/app",
        "configMod2": "modules/ARModule2/config",

        //paths for libraries
        "jquery": "lib/jquery",
        "angular": 'lib/angular.min',
        "underscore": "lib/underscore-min",
        "uiRouter": "lib/angular-ui-router.min",
        "uiRouterStyles": "lib/ui-router-styles"
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        'underscore': {
            exports: '_'
        },
        "bootstrap": {
            "deps": ['jquery']
        }
    }
});
