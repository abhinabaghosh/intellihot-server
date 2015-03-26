'use strict';

angular.module('genericAppApparborApp')
  .controller('ViewEventsCtrl', function ($scope,$http, Auth, socket) {
    $scope.message = 'Hello';


     $http.get('/api/events').success(function(events) {
      $scope.events = events;
      socket.syncUpdates('events', $scope.events);
    });


  });
