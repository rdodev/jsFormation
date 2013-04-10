'use strict';

angular.module('cfApp')
  .controller('ResourcesEC2Ctrl', function ($scope, $rootScope, $location) {
    $scope.EC2Resource= {"Type" : "AWS::EC2::Instance"};
    $scope.EC2Resource.Properties = {};
    $scope.typeList = ["t1.micro", "m1.small", "m1.medium", "m1.large", "m1.xlarge", "c1.xlarge", "c1.medium", "m2.xlarge"];
    $scope.zones = ["us-east-1a","us-east-1b", "us-east-1c","us-east-1d","us-west-2a","us-west-2b","us-west-2c", "us-west-1a", "us-west-1c"];
    $scope.disableTerminationValues = [{"key": "yes", "value":"true"}, {"key":"no", "value":"false"}];
    $scope.instanceName = "";
    $scope.AvailabilityZone = "";
    $scope.InstanceType = "";
    $scope.ImageId = "";
    $scope.DisableApiTermination = "";
    $scope.KeyName = "";

    $scope.addEC2Resource = function () {
        var p = {};
        p.AvailabilityZone = $scope.AvailabilityZone;
        p.InstanceType = $scope.InstanceType;
        p.DisableApiTermination = $scope.DisableApiTermination || "true"; //erring on the safe side
        p.ImageId = $scope.ImageId;
        if ($scope.KeyName) {
            p.KeyName = $scope.KeyName;
        }
        $scope.EC2Resource.Properties = p;
        $rootScope.cfObj.Resources[$scope.instanceName.toString()] = $scope.EC2Resource;
        $rootScope.ec2 += 1;
        $location.path('/resources');
    };

    $scope.cancel = function () {
        $location.path('/resources');
    };

  });
