'use strict';

angular.module('genericAppApparborApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/editDevices', {
        templateUrl: 'app/editDevices/editDevices.html',
        controller: 'EditDevicesCtrl'
      });
  });
