'use strict';

angular.module('genericAppApparborApp')
  .controller('ViewDevicesCtrl', function ($scope,$http, Auth,socket,$location) {
    $scope.message = 'Hello';
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.liveViewMode = false;


    $http.get('/api/devices/user/'+$scope.getCurrentUser()._id).success(function(myDevices) {
      $scope.myDevices = myDevices;
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
      }) 



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
