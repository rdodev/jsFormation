'use strict';

angular.module('cfApp')
  .controller('OutputCtrl', function ($scope, $rootScope) {
    $scope.output = angular.toJson($rootScope.cfObj, true);
  });
