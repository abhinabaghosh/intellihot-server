'use strict';

angular.module('genericAppApparborApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
                      'title': 'Home',
                      'link': '/'
                    },
                    {
                      'title': 'View Devices',
                      'link': '/viewDevices'
                    },
                    {
                      'title': 'View All Event',
                      'link': '/viewEvents'
                    },
                    {
                      'title': 'Edit Device',
                      'link': '/editDevices'
                    }


    ];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });