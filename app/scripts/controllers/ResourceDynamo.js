'use strict';

angular.module('cfApp')
  .controller('ResourcesDynamoCtrl', function ($scope, $rootScope, $location) {
    $scope.DynamoDBResource = {"Type" : "AWS::DynamoDB::Table"};
    $scope.validTypes = ["S", "N"];
    $scope.Properties = {};
    $scope.tableName = "";
    $scope.KeySchema = {};
    $scope.KSHashKeyName = "";
    $scope.KSHashKeyType = "";
    $scope.KSHashRangeName = "";
    $scope.KSHashRangeType = "";
    $scope.ReadCapacityUnits = "";
    $scope.WriteCapacityUnits = "";
    
    $scope.addDynamoDBResource = function () {
        var p = {};
        p.KeySchema = {};
        p.KeySchema.HashKeyElement = {};
        p.KeySchema.HashKeyElement.AttributeName = $scope.KSHashKeyName;
        p.KeySchema.HashKeyElement.AttributeType = $scope.KSHashKeyType;
        if($scope.KSHashRangeName !== "" && $scope.KSHashRangeType !== "") {
            p.KeySchema.RangeKeyElement = {};
            p.KeySchema.RangeKeyElement.AttributeName = $scope.KSHashRangeName;
            p.KeySchema.RangeKeyElement.AttributeType =  $scope.KSHashRangeType;
        }
        p.ProvisionedThroughput = {};
        p.ProvisionedThroughput.ReadCapacityUnits = $scope.ReadCapacityUnits;
        p.ProvisionedThroughput.WriteCapacityUnits = $scope.WriteCapacityUnits;

        $scope.DynamoDBResource.Properties = p;
        $rootScope.cfObj.Resources[$scope.tableName.toString()] = $scope.DynamoDBResource;
        $rootScope.dynamo += 1;
        $location.path('/resources');
    };

    $scope.cancel = function () {
        $location.path('/resources');
    };


  });
