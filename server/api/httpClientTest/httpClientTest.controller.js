'use strict';

var _ = require('lodash');
var HttpClientTest = require('./httpClientTest.model');

// Get list of httpClientTests
exports.index = function(req, res) {
  HttpClientTest.find(function (err, httpClientTests) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(httpClientTests);
  });
};

// Get a single httpClientTest
exports.show = function(req, res) {
  HttpClientTest.findById(req.params.id, function (err, httpClientTest) {
    if(err) { return handleError(res, err); }
    if(!httpClientTest) { return res.status(404).send('Not Found'); }
    return res.json(httpClientTest);
  });
};

// Creates a new httpClientTest in the DB.
exports.create = function(req, res) {
  HttpClientTest.create(req.body, function(err, httpClientTest) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(httpClientTest);
  });
};




// Updates an existing httpClientTest in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  HttpClientTest.findById(req.params.id, function (err, httpClientTest) {
    if (err) { return handleError(res, err); }
    if(!httpClientTest) { return res.status(404).send('Not Found'); }
    var updated = _.merge(httpClientTest, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(httpClientTest);
    });
  });
};

// Deletes a httpClientTest from the DB.
exports.destroy = function(req, res) {
  HttpClientTest.findById(req.params.id, function (err, httpClientTest) {
    if(err) { return handleError(res, err); }
    if(!httpClientTest) { return res.status(404).send('Not Found'); }
    httpClientTest.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}