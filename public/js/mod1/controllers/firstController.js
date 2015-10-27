define(['mod1/controllers/controllerModule'], function(controllerModule) {

    controllerModule.controller('firstController', ["$rootScope", '$http', '$scope',
        function($rootScope, $http, $scope) {
            $scope.msg = "firstController - tried with angular and require JS";

            $scope.displays = function(msg) {
                return "Good Morning " + msg;
            };
        }
    ]);
});
