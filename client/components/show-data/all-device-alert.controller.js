'use strict';

angular.module('genericAppApparborApp')
  .controller('AllDeviceAlertCtrl', function ($scope, Auth,$http) {

     $http.get('/api/deviceAlerts').success(function(deviceAlerts) {
      $scope.deviceAlerts = deviceAlerts;
    });

  });