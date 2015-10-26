define(['appMod2'], function(app) {
    app.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('root', {
                abstract: true,
                url: "",
                views: {
                    'header': {
                        templateUrl: 'views/header.html',
                        controller: ""
                    },
                    'footer': {
                        templateUrl: 'views/footer.html'
                    },
                    'navSection': {
                        templateUrl: 'views/nav.html',
                        controller: ""
                    }
                }
            })
            .state('root.third', {
                url: "",
                views: {
                    'content@': {
                        templateUrl: 'views/third.html',
                        controller: "thirdController as thirdCtrl"
                    }
                },
                secured: false
            })
            .state('root.fourth', {
                url: "/fourth",
                views: {
                    'content@': {
                        templateUrl: 'views/fourth.html',
                        controller: "fourthController as fourthCtrl"
                    }
                },
                secured: false
            })
    }]);
});
