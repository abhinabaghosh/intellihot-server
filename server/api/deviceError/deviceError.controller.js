'use strict';

var _ = require('lodash');
var DeviceError = require('./deviceError.model');

// Get list of deviceErrors
exports.index = function(req, res) {
  DeviceError.find(function (err, deviceErrors) {
    if(err) { return handleError(res, err); }
    return res.json(200, deviceErrors);
  });
};

// Get a single deviceError
exports.show = function(req, res) {
  DeviceError.findById(req.params.id, function (err, deviceError) {
    if(err) { return handleError(res, err); }
    if(!deviceError) { return res.send(404); }
    return res.json(deviceError);
  });
};

// Creates a new deviceError in the DB.
exports.create = function(req, res) {
  DeviceError.create(req.body, function(err, deviceError) {
    if(err) { return handleError(res, err); }
    return res.json(201, deviceError);
  });
};

// Updates an existing deviceError in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  DeviceError.findById(req.params.id, function (err, deviceError) {
    if (err) { return handleError(res, err); }
    if(!deviceError) { return res.send(404); }
    var updated = _.merge(deviceError, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, deviceError);
    });
  });
};

// Deletes a deviceError from the DB.
exports.destroy = function(req, res) {
  DeviceError.findById(req.params.id, function (err, deviceError) {
    if(err) { return handleError(res, err); }
    if(!deviceError) { return res.send(404); }
    deviceError.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}