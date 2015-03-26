'use strict';

angular.module('genericAppApparborApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
                      'title': 'Dashboard',
                      'link': '/'
                    },
                    {
                      'title': 'View Devices',
                      'link': '/viewDevices'
                    },
                    {
                      'title': 'View All Events',
                      'link': '/viewEvents'
                    },
                    {
                      'title': 'Edit Devices',
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