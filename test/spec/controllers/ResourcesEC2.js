'use strict';

describe('Controller: ResourcesEC2Ctrl', function () {

  // load the controller's module
  beforeEach(module('cfApp'));

  var ResourcesEC2Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    ResourcesEC2Ctrl = $controller('ResourcesEC2Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
