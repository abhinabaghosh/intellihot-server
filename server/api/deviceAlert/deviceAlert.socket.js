/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var DeviceAlert = require('./deviceAlert.model');

exports.register = function(socket) {
  DeviceAlert.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  DeviceAlert.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('deviceAlert:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('deviceAlert:remove', doc);
}