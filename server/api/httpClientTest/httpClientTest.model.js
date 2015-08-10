'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var HttpClientTestSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('HttpClientTest', HttpClientTestSchema);