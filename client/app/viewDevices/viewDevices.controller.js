'use strict';

angular.module('genericAppApparborApp')
  .controller('ViewDevicesCtrl', function ($scope,$http, socket) {
    $scope.message = 'Hello';

    $http.get('/api/devices').success(function(myDevices) {
      $scope.myDevices = myDevices;
      socket.syncUpdates('myDevices', $scope.myDevices);
    });





  });