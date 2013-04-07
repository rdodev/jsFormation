'use strict';

describe('Controller: ResourcesCtrl', function () {

  // load the controller's module
  beforeEach(module('cfApp'));

  var ResourcesCtrl,
    scope, rootScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    rootScope = {};
    rootScope.cfObj ={};
    rootScope.cfObj.Description = "something"
    ResourcesCtrl = $controller('ResourcesCtrl', {
      $scope: scope,
      $rootScope : rootScope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.Description).not.toBeNull();
  });
});
