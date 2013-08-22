'use strict';

describe('Controller: ResourcesDynamoCtrl', function () {

    // load the controller's module
  beforeEach(module('cfApp'));

  var ResourcesDynamoCtrl,
    scope, rootScope, loc;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $location) {
    scope = {};
    rootScope = {};
    loc = $location;

    rootScope.cfObj = {};
    rootScope.cfObj.Resources = {};
    rootScope.dynamo = 0;

    ResourcesDynamoCtrl = $controller('ResourcesDynamoCtrl', {
      $scope: scope,
      $rootScope: rootScope,
      $location: loc
    });
  }));

  it('addDynamoDBResource should set provisioned readwrite capacity', function () {
    scope.tableName = 'test-table';
    scope.ReadCapacityUnits = 10;
    scope.WriteCapacityUnits = 5;
    scope.addDynamoDBResource();
    expect(rootScope.cfObj.Resources[scope.tableName]
      .Properties.ProvisionedThroughput.ReadCapacityUnits).toEqual(10);
    expect(rootScope.cfObj.Resources[scope.tableName]
      .Properties.ProvisionedThroughput.WriteCapacityUnits).toEqual(5);
  });
  
  it('addDynamoDBResource should set key range when provided', function () {
    scope.tableName = 'test-table';
    scope.KSHashRangeName = 'test-range';
    scope.KSHashRangeType = 'S';
    scope.addDynamoDBResource();
    expect(rootScope.cfObj.Resources[scope.tableName]
      .Properties.KeySchema.RangeKeyElement.AttributeName).toEqual(scope.KSHashRangeName);
    expect(rootScope.cfObj.Resources[scope.tableName]
      .Properties.KeySchema.RangeKeyElement.AttributeType).toEqual(scope.KSHashRangeType);
  });

  it('addDynamoDBResource should not set key range when absent', function () {
    scope.tableName = 'test-table';
    scope.addDynamoDBResource();
    expect(rootScope.cfObj.Resources[scope.tableName]
      .Properties.KeySchema.RangeKeyElement).toBeUndefined();
  });

  it('addDynamoDBResource should set queue name', function () {
    scope.tableName = 'test';
    scope.addDynamoDBResource();
    expect(rootScope.cfObj.Resources['test']).toEqual(scope.DynamoDBResource);
  });

  it('addDynamoDBResource should increase rootScope.sqs by 1', function () {
    scope.addDynamoDBResource();
    expect(rootScope.dynamo).toEqual(1);
  });

  it('addDynamoDBResource should redirect to /resources when done', function () {
    spyOn(loc, 'path');
    scope.addDynamoDBResource();
    expect(loc.path).toHaveBeenCalledWith('/resources');
  });

  it('cancel should redirect to /resources', function () {
    spyOn(loc, 'path');
    scope.cancel();
    expect(loc.path).toHaveBeenCalledWith('/resources');
  });
  
});
