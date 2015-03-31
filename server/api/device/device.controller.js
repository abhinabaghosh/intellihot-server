'use strict';

var _ = require('lodash');
var Device = require('./device.model');
var User = require('../user/user.model');
var mongoose = require('mongoose');
//var auth = require('../../auth/auth.service');


// Get list of devices
exports.showUserDevices = function(req, res) {
  Device.find({ 'userId':req.params.id}, function (err, devices) {
    if(err) { return handleError(res, err); }
    return res.json(200, devices);
  });
};

exports.index = function(req, res) {
  Device.find(function (err, devices) {
    if(err) { return handleError(res, err); }
    return res.json(200, devices);
  });
};



// Get a single device
exports.show = function(req, res) {
  Device.findById(req.params.id, function (err, device) {
    if(err) { return handleError(res, err); }
    if(!device) { return res.send(404); }
    return res.json(device);
  });
};


exports.test = function(req, res) {
  User.find({ 'email': "test@test.com"}, function (err, User) {
    if(err) { return handleError(res, err); }
    if(!User) { return res.send(404); }
    return res.json(User);
  });
};

exports.test1 = function(req, res) {
  User.find( function (err, User) {
    if(err) { return handleError(res, err); }
    if(!User) { return res.send(404); }
    return res.json(User);
  });
};




// Creates a new device in the DB.
exports.create = function(req, res) {
   
  var adddevice=req.body;

    User.findOne({ 'email': req.body.userEmail }, function (err, docs) {
      adddevice.userId=docs._id;
      //console.log("name-->"+docs.name);
      //adddevice._userId={"type":docs._id};
          Device.findOne({ 'deviceId': req.body.deviceId }, function (err, device) {
                  if (err) { return handleError(res, err); }

                  if(!device) { 
                      Device.create(adddevice, function(err, device) {
                          if(err) { return handleError(res, err); }
                          return res.json(201, device);
                      });

                     }
                     else
                     {

                      var updated = _.merge(device, adddevice);

                          updated.save(function (err) {
                            if (err) { return handleError(res, err); }
                            return res.json(200, device);
                          });
                     }


          });



      
       
  
    });





  /*
  Device.create(req.body, function(err, device) {
    if(err) { return handleError(res, err); }
    return res.json(201, device);
  });
  */
  
};

// Updates an existing device in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Device.findById(req.params.id, function (err, device) {
    if (err) { return handleError(res, err); }
    if(!device) { return res.send(404); }
    var updated = _.merge(device, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, device);
    });
  });
};

// Deletes a device from the DB.
exports.destroy = function(req, res) {
  Device.findById(req.params.id, function (err, device) {
    if(err) { return handleError(res, err); }
    if(!device) { return res.send(404); }
    device.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}