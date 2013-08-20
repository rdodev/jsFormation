'use strict';

angular.module('cfApp')
  .controller('OutputCtrl', function ($scope, $rootScope, $location) {
    
    $scope.output;

    $scope.json = function () {
        $scope.output = angular.toJson($rootScope.cfObj, true);
    };

    $scope.addMore = function () {
        $location.path('/resources');
    };

    $scope.reset = function () {
        $rootScope.cfObj = {};
        $location.path('/');
    };
  });
