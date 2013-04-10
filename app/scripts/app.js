'use strict';

angular.module('cfApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/resources', {
        templateUrl: 'views/resources.html',
        controller: 'ResourcesCtrl'
      })
      .when('/ec2', {
        templateUrl: 'views/ec2.html',
        controller: 'ResourcesEC2Ctrl'
      })
      .when('/s3', {
        templateUrl: 'views/s3.html',
        controller: 'ResourcesS3Ctrl'
      })
      .when('/dynamo', {
        templateUrl: 'views/dynamo.html',
        controller: 'ResourceDynamoCtrl'
      })
      .when('/output', {
        templateUrl: 'views/output.html',
        controller: 'OutputCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
