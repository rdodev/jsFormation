'use strict';

angular.module('cfApp')
  .controller('ResourcesCtrl', function ($scope, $rootScope, $location) {
    $scope.cfObj = $rootScope.cfObj;

    $scope.addEC2Resource = function () {
        $location.path('/ec2');
    };

    $scope.addS3Resource = function () {
        $location.path('/s3');
    };

    $scope.goToOutput = function () {
        $location.path('/output');
    };

    $scope.hasMinimumRequirements = function () {
        return false;
    };

  });
