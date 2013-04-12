'use strict';

angular.module('cfApp')
  .controller('ResourcesCtrl', function ($scope, $rootScope, $location) {

    $scope.addEC2Resource = function () {
        $location.path('/ec2');
    };

    $scope.addS3Resource = function () {
        $location.path('/s3');
    };

    $scope.addDynamoDBResource = function () {
        $location.path('/dynamo');
    };

    $scope.addSQSResource = function () {
        $location.path('/sqs');
    };

    $scope.goToOutput = function () {
        $location.path('/output');
    };

    $scope.hasMinimumRequirements = function () {
        return $rootScope.s3 > 0 || $rootScope.ec2 > 0 || $rootScope.dynamo > 0 || $rootScope.sqs > 0;
    };

  });
