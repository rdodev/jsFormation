'use strict';

angular.module('cfApp')
  .controller('ResourcesSQSCtrl', function ($scope, $rootScope, $location) {
    $scope.SQSResouce = {'Type' : 'AWS::SQS::Queue'};
    
    $scope.queName = '';
    $scope.visibilityTimeout = '';


    $scope.addSQSResource = function () {
        var props = {};
        props.VisibilityTimeout = parseInt($scope.visibilityTimeout, 10);
        $scope.SQSResouce.Properties = props;
        $rootScope.sqs += 1;
        $rootScope.cfObj.Resources[$scope.queName.toString()] = $scope.SQSResouce;
        $location.path('/resources');
    };

    $scope.cancel = function () {
        $location.path('/resources');
    };
  
  });
