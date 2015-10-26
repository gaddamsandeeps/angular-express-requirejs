define(['mod2/controllers/controllerModule','jquery'], function(controllerModule,$) {

    controllerModule.controller('fourthController', ["$rootScope", '$state', '$http', '$scope',
        function($rootScope, $http, $scope) {
        $scope.msg = "fourthController - sandy---";

        $scope.displays = function(text) {
            return "fourthController - wetretret--dgfdg";
        };
    }]);
});
