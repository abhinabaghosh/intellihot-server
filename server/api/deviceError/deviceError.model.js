'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DeviceErrorSchema = new Schema({
  deviceId: String,
  userId: String,
  error: String,
  date: String,
  active: Boolean
});

module.exports = mongoose.model('DeviceError', DeviceErrorSchema);