'use strict';

angular.module('genericAppApparborApp')
  .controller('AllDeviceAlertCtrl', function ($scope, socket, Auth,$http) {

     $http.get('/api/deviceAlerts').success(function(deviceAlerts) {
      $scope.deviceAlerts = deviceAlerts;
      socket.syncUpdates('deviceAlerts', $scope.deviceAlerts);
    });

  });