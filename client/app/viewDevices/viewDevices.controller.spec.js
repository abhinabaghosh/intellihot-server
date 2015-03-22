'use strict';

describe('Controller: ViewDevicesCtrl', function () {

  // load the controller's module
  beforeEach(module('genericAppApparborApp'));

  var ViewDevicesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewDevicesCtrl = $controller('ViewDevicesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
