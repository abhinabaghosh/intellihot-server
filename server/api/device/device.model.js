'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DeviceSchema = new Schema({
  deviceId: String,
  name: String,
  userId: String,
  location: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Device', DeviceSchema);