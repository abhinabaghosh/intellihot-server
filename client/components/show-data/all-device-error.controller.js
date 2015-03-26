'use strict';

angular.module('genericAppApparborApp')
  .controller('DeviceErrorCtrl', function ($scope, socket, Auth,$http) {

     $http.get('/api/deviceErrors').success(function(deviceErrors) {
      $scope.deviceErrors = deviceErrors;
      socket.syncUpdates('deviceErrors', $scope.deviceErrors);
    });

  });