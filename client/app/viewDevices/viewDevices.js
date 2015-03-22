'use strict';

angular.module('genericAppApparborApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/viewDevices', {
        templateUrl: 'app/viewDevices/viewDevices.html',
        controller: 'ViewDevicesCtrl'
      });
  });
