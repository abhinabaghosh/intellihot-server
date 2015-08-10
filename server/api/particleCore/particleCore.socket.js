/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var ParticleCore = require('./particleCore.model');

exports.register = function(socket) {
  ParticleCore.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  ParticleCore.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('particleCore:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('particleCore:remove', doc);
}