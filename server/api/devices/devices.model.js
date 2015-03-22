'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DevicesSchema = new Schema({
  deviceId: String,
  name: String,
  userId: String,
  location: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Devices', DevicesSchema);