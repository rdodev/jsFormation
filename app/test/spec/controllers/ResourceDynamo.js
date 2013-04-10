'use strict';

describe('Controller: ResourceDynamoCtrl', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var ResourceDynamoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    ResourceDynamoCtrl = $controller('ResourceDynamoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
