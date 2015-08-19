'use strict';

angular.module('genericAppApparborApp')
  .controller('ViewDevicesCtrl', function ($scope,$http, Auth,$location) {
    $scope.message = 'Hello';

    $scope.temperature =160;

    $scope.onOff = {
        status: 'off'
      };


 
    $scope.liveViewMode = false;


    $scope.heaterOnOff = function(deviceId) {  
      var postUrl='/api/particleCores/heaterOnOff'; 

       var postData={
          deviceId:deviceId,
          heaterOnOff: $scope.onOff.status,
          backEndAccessToken:$scope.getCurrentUser.backEndAccessToken
        } ;

       $http.post(postUrl,postData).success(function(returnData) {
          if(returnData.error)
            alert("Something West Wrong. "+returnData.error);
          else
            alert("Heater Turned "+$scope.onOff.status);
        });
    };



    $scope.setHeaterTemp = function(deviceId,temp) {

        var postUrl='/api/particleCores/setHeaterTemperature'; 

        var postData={
          deviceId:deviceId,
          heaterTemperature: temp,
          backEndAccessToken:$scope.getCurrentUser.backEndAccessToken
        } ;

         $http.post(postUrl,postData).success(function(returnData) {
            if(returnData.error)
              alert("Something West Wrong. "+returnData.error);
            else
              alert("Heater Temperature Changed to "+temp +" ºF");
          });
      };



    $scope.getUserDevice = function() {



          if(Auth.getCurrentUser()._id==undefined)
          {

            $http.get('/api/users/me').then(function(result) {

                $scope.getCurrentUser = result.data;
                var currentUserId= $scope.getCurrentUser._id;
                
                $http.get('/api/devices/user/'+currentUserId).success(function(myDevices) {
                    $scope.myDevices = myDevices;
                  //$scope.myDevices.heaterData.updateTime = $scope.myDevices.heaterData.updateTime.toString();
                });


            });


          }
          else
          {

            $scope.getCurrentUser = Auth.getCurrentUser();
            //if( $scope.getCurrentUser._id)
            //localStorage.setItem("currentUserId", $scope.getCurrentUser._id);
            //var currentUserId=localStorage.getItem("currentUserId");
            var currentUserId=$scope.getCurrentUser._id;

            $http.get('/api/devices/user/'+currentUserId).success(function(myDevices) {
              $scope.myDevices = myDevices;
              //$scope.myDevices.heaterData.updateTime = $scope.myDevices.heaterData.updateTime.toString();
            });


          }


    };




    $scope.ViewDevice = function(deviceId) {

        //var liveFeedUrl='http://localhost:8080/v1/devices/'+deviceId+'?access_token='+$scope.getCurrentUser.backEndAccessToken;
      	var backendAccessUrl='/v1/devices/'+deviceId+'?access_token='+$scope.getCurrentUser.backEndAccessToken;
        $scope.pleaseWait = "Please be patient, getting your core status from server";
        var postData={
          backendAccessUrl: backendAccessUrl
        } ;

        var liveFeedUrl='/api/devices/getCoreStatus'; 

        $http.post(liveFeedUrl,postData).success(function(myDevicesLiveDetails) {

          $scope.pleaseWait="";
          myDevicesLiveDetails.variables="No variable found ";
          myDevicesLiveDetails.nofunctionMsg="Core not connected";
          $scope.myDevicesLiveDetails = myDevicesLiveDetails;
          //console.log(myDevicesLiveDetails);
        });

    	$scope.liveViewMode = true;
    }

      $scope.back = function() {
            $scope.liveViewMode = false;
      }

  });
