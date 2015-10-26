define(['appMod'], function(app) {
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
            .state('root.first', {
                url: "",
                views: {
                    'content@': {
                        templateUrl: 'views/first.html',
                        controller: "firstController as firstCtrl"
                    }
                },
                secured: false
            })
            .state('root.second', {
                url: "/second",
                views: {
                    'content@': {
                        templateUrl: 'views/second.html',
                        controller: "secondController as secondCtrl"
                    }
                },
                secured: false
            })
    }]);
});
