'use strict';

angular.module('genericAppApparborApp')
  .controller('ViewDevicesCtrl', function ($scope,$http, Auth,socket) {
    $scope.message = 'Hello';
    $scope.getCurrentUser = Auth.getCurrentUser;


    $http.get('/api/devices/user/'+$scope.getCurrentUser()._id).success(function(myDevices) {
      $scope.myDevices = myDevices;
      socket.syncUpdates('myDevices', $scope.myDevices);
    });





  });
