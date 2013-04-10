'use strict';

angular.module('cfApp')
  .controller('ResourcesEC2Ctrl', function ($scope, $rootScope, $location) {
    $scope.EC2Resource= {"Type" : "AWS::EC2::Instance"};
    $scope.typeList = ["t1.micro", "m1.small", "m1.medium", "m1.large", "m1.xlarge", "c1.xlarge", "c1.medium", "m2.xlarge"];
    $scope.zones = ["us-east-1a","us-east-1b", "us-east-1c","us-east-1d","us-west-2a","us-west-2b","us-west-2c", "us-west-1a", "us-west-1c"];
    $scope.disableTerminationValues = [{"yes":"true"},{"no", "false"}];
    $scope.az = "";
    $scope.instanceType = "";
    $scope.imageId = "";


  });
