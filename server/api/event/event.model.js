'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EventSchema = new Schema({
  deviceId: String,
  name: String,
  userId: String,
  time: String,
  date: String,
  active: Boolean
});

module.exports = mongoose.model('Event', EventSchema);