define(['mod1/controllers/controllerModule', 'jquery'], function(controllerModule, $) {

    controllerModule.controller('secondController', ["$rootScope", '$http', '$scope',
        function($rootScope, $http, $scope) {
            $scope.msg = "secondController - tried with angular and require JS";

            $scope.wish = function(text) {
                return "Good Afternoon " + text;
            };
        }
    ]);
});
