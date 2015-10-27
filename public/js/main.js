var routes = {
    /*Home page & static pages*/
    "/": {
        module: {
            "app": "appMod",
            "config": "configMod",
            "root": "home",
            "moduleName": "AR"
        }
    },
    "/two": {
        module: {
            "app": "appMod2",
            "config": "configMod2",
            "root": "home",
            "moduleName": "AR"
        }
    }
};

function getRoute() {
    console.log(location.pathname)
    var module;
    if (typeof routes[location.pathname] !== "undefined") {
        module = routes[location.pathname];
    }
    return routes[location.pathname];
}

var r = getRoute();

function start() {
    console.log(r)
    require(["jquery", 'angular'], function($, angular) {
        require([r.module.config], function(ccc) {
            angular.bootstrap(document, [r.module.moduleName]);
        });
    });
}

start();
