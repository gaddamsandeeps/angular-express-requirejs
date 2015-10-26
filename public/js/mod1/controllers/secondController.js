define(['mod1/controllers/controllerModule','jquery'], function(controllerModule,$) {

    controllerModule.controller('secondController', ["$rootScope", '$state', '$http', '$scope',
        function($rootScope, $http, $scope) {
        $scope.msg = "secondController - sandy---";

        $scope.displays = function(text) {
            return "secondController - wetretret--dgfdg";
        };
    }]);
});
