'use strict';

describe('Controller: ResourcesS3Ctrl', function () {

  // load the controller's module
  beforeEach(module('cfApp'));

  var ResourcesS3Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    ResourcesS3Ctrl = $controller('ResourcesS3Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.cancel).not.toBeNull();
  });
});
