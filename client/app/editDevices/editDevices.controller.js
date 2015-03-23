'use strict';

angular.module('genericAppApparborApp')
  .controller('EditDevicesCtrl', function ($scope) {
  	$scope.message = 'Hello';
    $scope.editMode = false;

  	 $scope.addDevice = function() {
  	 	$scope.editMode = true;
  	 	//alert("clicked");
  	 };

  	 $scope.cancelAddDevice = function() {
  	 	$scope.editMode = false;
  	 	//alert("clicked");
  	 };



  });
