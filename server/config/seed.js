/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

var Device = require('../api/device/device.model');
var DeviceAlert = require('../api/deviceAlert/deviceAlert.model');
var DeviceError = require('../api/deviceError/deviceError.model');
var Event = require('../api/event/event.model');




Event.find({}).remove(function() {
  Event.create({
    deviceId: "1234",
    name: "Ignition Fault",
    userId: "1234",
    time: "9:15 AM ",
    date: "12/04/15",
    active: true
  }, function() {
      console.log('finished populating Event');
    }
  );
});


Device.find({}).remove(function() {});

/**/
Device.find({}).remove(function() {
  Device.create({
    deviceId: "1234",
    name: "Murali's Device",
    userId: "1",
    location: "123 Park Ave NY 51201",
    serviceContractor:{
              email:"serviceContractor@intellihot.com",
              alert:false,
              error:true,
              },
    maintenance:{
              email:"maintenance@intellihot.com",
              alert:true,
              error:true,
              },          
    info: "no info for now",
    active: true
  }, {
    deviceId: "12345",
    name: "Abhi's Device",
    userId: "2",
    location: "D 14/1 brahmapur place",
    serviceContractor:{
              email:"serviceContractor1@intellihot.com",
              alert:false,
              error:true,
              },
    maintenance:{
              email:"maintenance1@intellihot.com",
              alert:false,
              error:false,
              },
    info: "no info for now",
    active: true
  }, function() {
      console.log('finished populating Device');
    }
  );
});




DeviceAlert.find({}).remove(function() {
  DeviceAlert.create({
      deviceId: "1234",
      userId: "1234",
      event: "Air Filter change",
      date: "31/3/2015",
      active: true
  }, {
      deviceId: "12345",
      userId: "12345",
      event: "coil change",
      date: "31/5/2015",
      active: true
  }, function() {
      console.log('finished populating DeviceAlert');
    }
  );
});



DeviceError.find({}).remove(function() {
  DeviceError.create({
      deviceId: "1234",
      userId: "1234",
      error: "Air Filter Error",
      date: "31/3/2015",
      active: true
  }, {
      deviceId: "12345",
      userId: "12345",
      error: "coil Error",
      date: "31/5/2015",
      active: true
  }, function() {
      console.log('finished populating DeviceError');
    }
  );
});





/**/






Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});



/**/
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







/**/
