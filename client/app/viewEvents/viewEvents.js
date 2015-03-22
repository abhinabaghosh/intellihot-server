'use strict';

angular.module('genericAppApparborApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/viewEvents', {
        templateUrl: 'app/viewEvents/viewEvents.html',
        controller: 'ViewEventsCtrl'
      });
  });
