'use strict';

var _ = require('lodash');
var DeviceAlert = require('./deviceAlert.model');

// Get list of deviceAlerts
exports.index = function(req, res) {
  DeviceAlert.find(function (err, deviceAlerts) {
    if(err) { return handleError(res, err); }
    return res.json(200, deviceAlerts);
  });
};

// Get a single deviceAlert
exports.show = function(req, res) {
  DeviceAlert.findById(req.params.id, function (err, deviceAlert) {
    if(err) { return handleError(res, err); }
    if(!deviceAlert) { return res.send(404); }
    return res.json(deviceAlert);
  });
};

// Creates a new deviceAlert in the DB.
exports.create = function(req, res) {
  DeviceAlert.create(req.body, function(err, deviceAlert) {
    if(err) { return handleError(res, err); }
    return res.json(201, deviceAlert);
  });
};

// Updates an existing deviceAlert in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  DeviceAlert.findById(req.params.id, function (err, deviceAlert) {
    if (err) { return handleError(res, err); }
    if(!deviceAlert) { return res.send(404); }
    var updated = _.merge(deviceAlert, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, deviceAlert);
    });
  });
};

// Deletes a deviceAlert from the DB.
exports.destroy = function(req, res) {
  DeviceAlert.findById(req.params.id, function (err, deviceAlert) {
    if(err) { return handleError(res, err); }
    if(!deviceAlert) { return res.send(404); }
    deviceAlert.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}