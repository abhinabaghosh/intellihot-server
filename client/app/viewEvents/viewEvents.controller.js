'use strict';

angular.module('genericAppApparborApp')
  .controller('ViewEventsCtrl', function ($scope,$http, Auth) {
    $scope.message = 'Hello';


     $http.get('/api/events').success(function(events) {
      $scope.events = events;
    });


  });
