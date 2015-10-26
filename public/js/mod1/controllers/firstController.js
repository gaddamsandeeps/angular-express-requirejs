define(['mod1/controllers/controllerModule'], function(controllerModule) {

    controllerModule.controller('firstController', ["$rootScope", '$http', '$scope',
        function($rootScope, $http, $scope) {
            $scope.msg = "firstController - sandy---";

            $scope.displays = function() {
                return "firstController - welcomes sandy";
            };
        }
    ]);
});
