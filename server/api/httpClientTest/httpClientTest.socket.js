/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var HttpClientTest = require('./httpClientTest.model');

exports.register = function(socket) {
  HttpClientTest.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  HttpClientTest.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('httpClientTest:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('httpClientTest:remove', doc);
}