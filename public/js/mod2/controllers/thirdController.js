define(['mod2/controllers/controllerModule'], function(controllerModule) {

    controllerModule.controller('thirdController', ["$rootScope", '$http', '$scope',
        function($rootScope, $http, $scope) {
            $scope.msg = "thirdController - sandy---";

            $scope.displays = function() {
                return "thirdController - welcomes sandy";
            };
        }
    ]);
});
