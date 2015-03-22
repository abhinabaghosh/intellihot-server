/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

var Device = require('../api/devices/devices.model');



Device.find({}).remove(function() {
  Device.create({
    deviceId: "1234",
    name: "Murali's Device",
    userId: "1",
    location: "123 Park Ave NY 51201",
    info: "no info for now",
    active: true
  }, {
    deviceId: "12345",
    name: "Abhi's Device",
    userId: "2",
    location: "D 14/1 brahmapur place",
    info: "no info for now",
    active: true
  }, function() {
      console.log('finished populating users');
    }
  );
});





/*
User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});
*/






/**/
