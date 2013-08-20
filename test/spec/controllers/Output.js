'use strict';

describe('Controller: OutputCtrl', function () {

  // load the controller's module
  beforeEach(module('cfApp'));

  var OutputCtrl,
    scope,rootScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    rootScope = {};
    OutputCtrl = $controller('OutputCtrl', {
      $scope: scope,
      $rootScope: rootScope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.output).toBeUndefined();
  });
});
