'use strict';

describe('Controller: ResourcesSQSCtrl', function () {

    // load the controller's module
  beforeEach(module('cfApp'));

  var ResourcesSQSCtrl,
    scope, rootScope, loc;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $location) {
    scope = {};
    rootScope = {};
    loc = $location;

    scope.queName = '';
    scope.visibilityTimeout = '';
    rootScope.cfObj = {};
    rootScope.cfObj.Resources = {};
    rootScope.sqs = 0;

    ResourcesSQSCtrl = $controller('ResourcesSQSCtrl', {
      $scope: scope,
      $rootScope: rootScope,
      $location: loc
    });
  }));

  it('addSQSResource should int parse visibilityTimeout', function () {
    scope.visibilityTimeout = '10';
    scope.addSQSResource();
    expect(scope.SQSResource.Properties.VisibilityTimeout).toEqual(10);
  });
  
  it('addSQSResource should set queue name', function () {
    scope.queName = 'test-que';
    scope.addSQSResource();
    expect(rootScope.cfObj.Resources['test-que']).toEqual(scope.SQSResource);
  });

  it('addSQSResource should increase rootScope.sqs by 1', function () {
    scope.addSQSResource();
    expect(rootScope.sqs).toEqual(1);
  });

  it('addSQSResource should redirect to /resources when done', function () {
    spyOn(loc, 'path');
    scope.addSQSResource();
    expect(loc.path).toHaveBeenCalledWith('/resources');
  });

  it('cancel should redirect to /resources', function () {
    spyOn(loc, 'path');
    scope.cancel();
    expect(loc.path).toHaveBeenCalledWith('/resources');
  });
  
});
