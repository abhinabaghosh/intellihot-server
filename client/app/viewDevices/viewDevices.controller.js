'use strict';

angular.module('genericAppApparborApp')
  .controller('ViewDevicesCtrl', function ($scope,$http, Auth,socket,$location) {
    $scope.message = 'Hello';

    $scope.temperature =150;



    //$scope.onOff = "Off";
    $scope.onOff = {
        status: 'off'
      };


    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.liveViewMode = false;


    $scope.heaterOnOff = function(deviceId) {
      //alert( $scope.onOff.status);  
      //alert( deviceId);  
      var postUrl='/api/particleCores/heaterOnOff'; 

       var postData={
          deviceId:deviceId,
          heaterOnOff: $scope.onOff.status,
          backEndAccessToken:$scope.getCurrentUser().backEndAccessToken
        } ;

       
       $http.post(postUrl,postData).success(function(returnData) {
          // console.log(returnData);

          if(returnData.error)
            alert("Something West Wrong. "+returnData.error);
          else
            alert("Heater Turned "+$scope.onOff.status);
          
        });
      /* */
    };



    $scope.setHeaterTemp = function(deviceId,temp) {
       // alert(temp);  

        //$scope.temperature =111;
        
        var postUrl='/api/particleCores/setHeaterTemperature'; 

        
        var postData={
          deviceId:deviceId,
          heaterTemperature: temp,
          backEndAccessToken:$scope.getCurrentUser().backEndAccessToken
        } ;

         $http.post(postUrl,postData).success(function(returnData) {

            if(returnData.error)
              alert("Something West Wrong. "+returnData.error);
            else
              alert("Heater Temperature Changed to "+temp +" ºF");

          });
        /**/

      };







    $http.get('/api/devices/user/'+$scope.getCurrentUser()._id).success(function(myDevices) {

      //myDevices[0].heaterData.updateTime=myDevices[0].heaterData.updateTime.getDate();
      //$scope.temperature =myDevices.heaterData.inletTemp;

      $scope.myDevices = myDevices;
      //$scope.myDevices.heaterData.updateTime = $scope.myDevices.heaterData.updateTime.toString();
      socket.syncUpdates('myDevices', $scope.myDevices);
    });

    $scope.ViewDevice = function(deviceId) {

        //var liveFeedUrl='http://localhost:8080/v1/devices/'+deviceId+'?access_token='+$scope.getCurrentUser().backEndAccessToken;
      	var backendAccessUrl='/v1/devices/'+deviceId+'?access_token='+$scope.getCurrentUser().backEndAccessToken;
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
          socket.syncUpdates('myDevicesLiveDetails', $scope.myDevicesLiveDetails);
        });


      /*
      $http.jsonp(liveFeedUrl).success(function(data){
            //console.log(data);
        });
      */



    	//alert(deviceId);
    	$scope.liveViewMode = true;
    }

      $scope.back = function() {
          //$location.path('/viewDevices');
            $scope.liveViewMode = false;
          //alert("comming");
      }

  });
