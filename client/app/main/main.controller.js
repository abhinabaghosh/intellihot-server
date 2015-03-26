'use strict';

angular.module('genericAppApparborApp')
  .controller('MainCtrl', function ($scope, $http, socket,Auth) {

     $scope.isLoggedIn = Auth.isLoggedIn;


    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }

      
         
      $http.post('/api/things', { name: $scope.newThing });
      //$http.post('/api/languages', language);
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });
