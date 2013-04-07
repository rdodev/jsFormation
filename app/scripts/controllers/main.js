'use strict';

angular.module('cfApp')
  .controller('MainCtrl', function ($scope, $rootScope, $location) {
    
    $rootScope.cfObj = {};
    $rootScope.cfObj.Description = '';

    $scope.goToResources = function () {
        $location.path('/resources').replace();
    };
  });
