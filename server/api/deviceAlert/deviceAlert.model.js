'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DeviceAlertSchema = new Schema({
  deviceId: String,
  userId: String,
  event: String,
  date: String,
  active: Boolean
});

module.exports = mongoose.model('DeviceAlert', DeviceAlertSchema);