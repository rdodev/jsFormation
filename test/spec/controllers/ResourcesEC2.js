'use strict';

describe('Controller: ResourcesEC2Ctrl', function () {

  // load the controller's module
  beforeEach(module('cfApp'));

  var ResourcesEC2Ctrl,
    scope, rootScope, loc;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $location) {
    scope = {};
    rootScope = {};
    loc = $location;

    scope.instanceName = 'TestInstance';
    scope.AvailabilityZone = 'us-east-1';
    scope.InstanceType = 'm1.medium';
    scope.ImageId = '';
    scope.DisableApiTermination = '';
    scope.KeyName = '';
    rootScope.cfObj = {};
    rootScope.cfObj.Resources = {};
    rootScope.ec2 = 0;

    ResourcesEC2Ctrl = $controller('ResourcesEC2Ctrl', {
      $scope: scope,
      $rootScope: rootScope,
      $location: loc
    });
  }));

  it('addEC2Resource should set p.DisableApiTermination to true if not chosen', function () {
    scope.addEC2Resource();
    expect(scope.EC2Resource.Properties).not.toBe({});
    expect(scope.EC2Resource.Properties.DisableApiTermination).toEqual('true');
  });
  
  it('addEC2Resource should set KeyName if present', function () {
    scope.KeyName = 'bippiddi';
    scope.addEC2Resource();
    expect(scope.EC2Resource.Properties).not.toBe({});
    expect(scope.EC2Resource.Properties.KeyName).toEqual('bippiddi');
  });

  it('addEC2Resource should increase rootScope.ec2 by 1', function () {
    scope.addEC2Resource();
    expect(rootScope.ec2).toEqual(1);
  });

  it('addEC2Resource should redirect to /resources when done', function () {
    spyOn(loc, 'path');
    scope.addEC2Resource();
    expect(loc.path).toHaveBeenCalledWith('/resources');
  });

  it('cancel should redirect to /resources', function () {
    spyOn(loc, 'path');
    scope.cancel();
    expect(loc.path).toHaveBeenCalledWith('/resources');
  });

});
