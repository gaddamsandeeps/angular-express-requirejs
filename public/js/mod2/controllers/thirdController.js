define(['mod2/controllers/controllerModule'], function(controllerModule) {

    controllerModule.controller('thirdController', ["$rootScope", '$http', '$scope',
        function($rootScope, $http, $scope) {
            $scope.msg = "thirdController - AR";

            $scope.displays = function(msg) {
                return "Good Evening "+msg;
            };
        }
    ]);
});
