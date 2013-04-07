'use strict';

angular.module('cfApp')
  .controller('ResourcesCtrl', function ($scope, $rootScope, $location) {
    $scope.Description = $rootScope.cfObj.Description;

    $scope.addEC2Resource = function () {
        $location.path('/resources/ec2').replace();
    };

    $scope.addS3Resource = function () {
        $location.path('/resources/s3').replace();
    };
  });
