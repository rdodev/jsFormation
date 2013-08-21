'use strict';

describe('Controller: ResourcesCtrl', function () {

  // load the controller's module
  beforeEach(module('cfApp'));

  var ResourcesCtrl,
    scope, rootScope , loc;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $location) {
    scope = {};
    rootScope = {};
    rootScope.cfObj ={};
    rootScope.cfObj.Description = "something";
    loc = $location;
    ResourcesCtrl = $controller('ResourcesCtrl', {
      $scope: scope,
      $rootScope : rootScope,
      $location: loc
    });
  }));

  it('addEC2Resource should change location', function () {
    spyOn(loc, 'path');
    scope.addEC2Resource();
    expect(loc.path).toHaveBeenCalledWith('/ec2');
  });

  it('addS3Resource should change to the correct location', function () {
    spyOn(loc, 'path');
    scope.addS3Resource();
    expect(loc.path).toHaveBeenCalledWith('/s3');
  });

  it('addSQSResource should change to the correct location', function () {
    spyOn(loc, 'path');
    scope.addSQSResource();
    expect(loc.path).toHaveBeenCalledWith('/sqs');
  });

  it('addDynamoDBResource should change to the correct location', function () {
    spyOn(loc, 'path');
    scope.addDynamoDBResource();
    expect(loc.path).toHaveBeenCalledWith('/dynamo');
  });

  it('goToOutput should change to the correct location', function () {
    spyOn(loc, 'path');
    scope.goToOutput();
    expect(loc.path).toHaveBeenCalledWith('/output');
  });

  it('hasMinimumRequirements should return true when met', function () {
    rootScope.s3 = 1;
    expect(scope.hasMinimumRequirements()).toBe(true);
  });
  
  it('hasMinimumRequirements should return false when not met', function () {
    expect(scope.hasMinimumRequirements()).toBe(false);
  });

});
