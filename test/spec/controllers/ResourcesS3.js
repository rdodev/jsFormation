'use strict';

describe('Controller: ResourcesS3Ctrl', function () {

    // load the controller's module
  beforeEach(module('cfApp'));

  var ResourcesS3Ctrl,
    scope, rootScope, loc;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $location) {
    scope = {};
    rootScope = {};
    loc = $location;

    scope.bucketName = '';
    scope.accessControl = '';
    scope.indexDocument = '';
    scope.errorDocument = '';
    rootScope.cfObj = {};
    rootScope.cfObj.Resources = {};
    rootScope.s3 = 0;

    ResourcesS3Ctrl = $controller('ResourcesS3Ctrl', {
      $scope: scope,
      $rootScope: rootScope,
      $location: loc
    });
  }));

  it('addS3Resource should set p.DisableApiTermination to true if not chosen', function () {
    scope.bucketName = 'test-bucket-name';
    scope.addS3Resource();
    expect(scope.S3Resouce.Properties).not.toBe({});
    expect(rootScope.cfObj.Resources['test-bucket-name']).toBeDefined();
  });
  
  it('addS3Resource should set permission to private if absent', function () {
    scope.addS3Resource();
    expect(scope.S3Resouce.Properties.AccessControl).toEqual('Private');
  });

  it('addS3Resource should increase rootScope.s3 by 1', function () {
    scope.addS3Resource();
    expect(rootScope.s3).toEqual(1);
  });

  it('addS3Resource should redirect to /resources when done', function () {
    spyOn(loc, 'path');
    scope.addS3Resource();
    expect(loc.path).toHaveBeenCalledWith('/resources');
  });

  it('cancel should redirect to /resources', function () {
    spyOn(loc, 'path');
    scope.cancel();
    expect(loc.path).toHaveBeenCalledWith('/resources');
  });
});
