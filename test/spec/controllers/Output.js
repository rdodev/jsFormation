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

  it('json function works as intended', function () {
    expect(scope.output).toBeUndefined();
    rootScope.cfObj = {};
    scope.json();
    expect(scope.output).not.toBeUndefined();
  });

  it('addMore function works as intended', function() {
    spyOn(loc, 'path');
    scope.addMore();
    expect(loc.path).toHaveBeenCalledWith('/resources');
  });

  it('reset function works as intended', function () {
    spyOn(loc, 'path');
    scope.reset()
    expect(rootScope.cfObj).toEqual({});
    expect(loc.path).toHaveBeenCalledWith('/');
  });

});
