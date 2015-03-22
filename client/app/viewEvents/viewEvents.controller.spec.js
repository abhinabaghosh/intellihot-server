'use strict';

describe('Controller: ViewEventsCtrl', function () {

  // load the controller's module
  beforeEach(module('genericAppApparborApp'));

  var ViewEventsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewEventsCtrl = $controller('ViewEventsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
