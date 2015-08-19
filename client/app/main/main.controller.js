'use strict';

angular.module('genericAppApparborApp')
  .controller('MainCtrl', function ($scope, $http,Auth) {

     $scope.isLoggedIn = Auth.isLoggedIn;
     

  });
