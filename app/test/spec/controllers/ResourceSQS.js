'use strict';

describe('Controller: ResourceSQSCtrl', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var ResourceSQSCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    ResourceSQSCtrl = $controller('ResourceSQSCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
