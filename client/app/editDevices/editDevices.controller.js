'use strict';

angular.module('genericAppApparborApp')
  .controller('EditDevicesCtrl', function ($scope,$http, Auth, socket,$location) {
  	$scope.message = 'Hello';
    $scope.editMode = false;

    $scope.heaterLocation = "abcd";

  	 $scope.addDevice = function() {

  	 	$scope.editMode = true;

  	 	//alert("clicked");
  	 };


     $scope.editDevice = function(deviceId) {

      $scope.editMode = true;
            $http.get('/api/devices/'+deviceId).success(function(device) {
            $scope.deviceDetails = device;
            socket.syncUpdates('deviceDetails', $scope.deviceDetails);
          });

     };

     
     //$scope.updateDevice = function(deviceId) {
      $scope.updateDevice = function() {
    
            $http.put('/api/devices/'+$scope.deviceDetails._id,$scope.deviceDetails).success(function(device) {
            //$scope.deviceDetails = device;
            //socket.syncUpdates('deviceDetails', $scope.deviceDetails);
             //$scope.editMode = false;
             //$route.reload();
             $location.path('/viewDevices');
          });
  
     };
  





  	 $scope.cancelAddDevice = function() {
  	 	$scope.editMode = false;
  	 	//alert("clicked");
  	 };


     $http.get('/api/devices').success(function(myDevices) {
      $scope.myDevices = myDevices;
      socket.syncUpdates('myDevices', $scope.myDevices);
    });

  });
