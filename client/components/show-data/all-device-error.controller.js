'use strict';

angular.module('genericAppApparborApp')
  .controller('DeviceErrorCtrl', function ($scope, Auth,$http) {

     $http.get('/api/deviceErrors').success(function(deviceErrors) {
      $scope.deviceErrors = deviceErrors;
    });

  });