'use strict';

angular.module('cfApp')
  .controller('ResourcesS3Ctrl', function ($scope, $rootScope, $location) {
    $scope.S3Resouce = {"Type" : "AWS::S3::Bucket"};
    $scope.acList = ["Private", "PublicRead", "PublicReadWrite", "AuthenticatedRead", "BucketOwnerRead", "BucketOwnerFullControl"];
    $scope.bucketName = "";
    $scope.accessControl = "";
    $scope.indexDocument = "";
    $scope.errorDocument = "";

    $scope.addS3Resource = function () {
        var props = {};
        var i = parseInt($scope.accessControl, 10) || 0;
        props.AccessControl =  $scope.acList[i];
        if($scope.indexDocument || $scope.errorDocument) {
            props.WebsiteConfiguration = {};
            props.WebsiteConfiguration.IndexDocument = $scope.indexDocument;
            props.WebsiteConfiguration.errorDocument = $scope.errorDocument;
        }
    };

    $scope.cancel = function () {
        $location.path('/resources');
    };

  });
