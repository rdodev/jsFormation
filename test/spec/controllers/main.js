'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('cfApp'));

  var MainCtrl, scope, rootScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    rootScope = {};
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      $rootScope : rootScope
    });
  }));

  it('initial counts shjould be set to 0', function (){
    expect(rootScope.ec2).toBe(0);
    expect(rootScope.s3).toBe(0);
    expect(rootScope.sqs).toBe(0);
    expect(rootScope.dynamo).toBe(0);
  });
  
  it('cfObj should be initialized', function(){
    expect(rootScope.cfObj).not.toBeNull();
    expect(rootScope.cfObj.AWSTemplateFormatVersion).toEqual('2010-09-09');
    expect(rootScope.cfObj.Description).toBeFalsy();
    expect(rootScope.cfObj.Resources).toEqual({});
  });

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.goToResources).not.toBeNull();
  });

});
