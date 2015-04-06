'use strict';

angular.module('genericAppApparborApp')
  .controller('EditDevicesCtrl', function ($scope,$http, Auth, socket,$location) {
  	$scope.message = 'Hello';
    $scope.editMode = false;

    $scope.heaterLocation = "abcd";

  	 $scope.addDevice = function() {

  	 	$scope.editMode = true;
      var getCurrentUser = Auth.getCurrentUser;
      console.log(getCurrentUser().email);

      var addDevice={
        deviceId: "abcd",
        name: "new add device",
        userEmail: getCurrentUser().email,
        location: "updated demo location",
        serviceContractor:{
                    email:"testserviceContractor@gmail.com",
                    alert:true,
                    error:true
                    },
        maintenance:{
              email:"testmaintenance@gmail.com",
              alert:true,
              error:true
              },            
        info: "no info for now",
        active: true
      };


      
      $http.post('/api/devices/', addDevice).success(function(device) {
             $location.path('/viewDevices');
          });
    /**/
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

     $scope.getCurrentUser = Auth.getCurrentUser;


     $http.get('/api/devices/user/'+$scope.getCurrentUser()._id).success(function(myDevices) {
      $scope.myDevices = myDevices;
      socket.syncUpdates('myDevices', $scope.myDevices);
    });




  });
