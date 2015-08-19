'use strict';

angular.module('genericAppApparborApp')
  .controller('EditDevicesCtrl', function ($scope,$http,Auth,$location) {
  	$scope.message = 'Hello';
    $scope.editMode = false;

    $scope.heaterLocation = "abcd";



    /*
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
  	 };
    */




     $scope.editDevice = function(deviceId) {

      $scope.editMode = true;
            $http.get('/api/devices/'+deviceId).success(function(device) {
            $scope.deviceDetails = device;
          });

     };


     //$scope.updateDevice = function(deviceId) {
      $scope.updateDevice = function() {
    
            $http.put('/api/devices/'+$scope.deviceDetails._id,$scope.deviceDetails).success(function(device) {
            //$scope.deviceDetails = device;
             //$scope.editMode = false;
             //$route.reload();
             $location.path('/viewDevices');
          });
  
     };
  





  	 $scope.cancelAddDevice = function() {
  	 	$scope.editMode = false;
  	 	//alert("clicked");
  	 };

  /*
     $scope.getCurrentUser = Auth.getCurrentUser;

    if( $scope.getCurrentUser()._id)
    localStorage.setItem("currentUserId", $scope.getCurrentUser()._id);

    //var currentUserId=localStorage.getItem("currentUserId");

   
    var currentUserId= $scope.getCurrentUser()._id;

    $http.get('/api/devices/user/'+currentUserId).success(function(myDevices) {
      $scope.myDevices = myDevices;
    });
  */



    
    /**/
    if(Auth.getCurrentUser()._id==undefined)
    {   

        $http.get('/api/users/me').then(function(result) {
            $scope.getCurrentUser = result.data;
            var currentUserId= $scope.getCurrentUser._id;
            
            $http.get('/api/devices/user/'+currentUserId).success(function(myDevices) {
              $scope.myDevices = myDevices;
            });

        });

    }
    else
    {     
      /*
          $scope.getCurrentUser = Auth.getCurrentUser;
          var currentUserId= $scope.getCurrentUser()._id;
          //console.log("auth present");
          //console.log("userid-->"+currentUserId);
          $http.get('/api/devices/user/'+currentUserId).success(function(myDevices) {
           $scope.myDevices = myDevices;
          });
            */


          $scope.getCurrentUser = Auth.getCurrentUser();
          var currentUserId= $scope.getCurrentUser._id;
          //console.log("auth present");
          //console.log("userid-->"+currentUserId);
          $http.get('/api/devices/user/'+currentUserId).success(function(myDevices) {
           $scope.myDevices = myDevices;
          });

    }
    

     




  });
    
