'use strict';

angular.module('cfApp')
  .controller('ResourcesSQSCtrl', function ($scope, $rootScope, $location) {
    $scope.SQSResource = {'Type' : 'AWS::SQS::Queue'};
    
    $scope.queName = '';
    $scope.visibilityTimeout = '';


    $scope.addSQSResource = function () {
        var props = {};
        props.VisibilityTimeout = parseInt($scope.visibilityTimeout, 10);
        $scope.SQSResource.Properties = props;
        $rootScope.sqs += 1;
        $rootScope.cfObj.Resources[$scope.queName.toString()] = $scope.SQSResource;
        $location.path('/resources');
    };

    $scope.cancel = function () {
        $location.path('/resources');
    };
  
  });
