/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var DeviceError = require('./deviceError.model');

exports.register = function(socket) {
  DeviceError.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  DeviceError.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('deviceError:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('deviceError:remove', doc);
}