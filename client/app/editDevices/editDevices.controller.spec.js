'use strict';

describe('Controller: EditDevicesCtrl', function () {

  // load the controller's module
  beforeEach(module('genericAppApparborApp'));

  var EditDevicesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditDevicesCtrl = $controller('EditDevicesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
