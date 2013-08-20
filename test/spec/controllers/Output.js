'use strict';

describe('Controller: OutputCtrl', function () {

  // load the controller's module
  beforeEach(module('cfApp'));

  var OutputCtrl,
    scope,rootScope, loc;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $location) {
    scope = {};
    rootScope = {};
    loc = $location;
    OutputCtrl = $controller('OutputCtrl', {
      $scope: scope,
      $rootScope: rootScope,
      $location: loc
    });
  }));

  it('checking json function works as intended', function () {
    expect(scope.output).toBeUndefined();
    rootScope.cfObj = {};
    scope.json();
    expect(scope.output).not.toBeUndefined();
  });

  it('checking reset function works as intended', function () {
    spyOn(loc, 'path');
    scope.reset()
    expect(rootScope.cfObj).toEqual({});
    expect(loc.path).toHaveBeenCalledWith('/');
  });

});
