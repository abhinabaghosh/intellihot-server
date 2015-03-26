'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DeviceSchema = new Schema({
  deviceId: String,
  name: String,
  userId: String,
  location: String,
  serviceContractor:{
  						email:String,
  						alert:Boolean,
  						error:Boolean
  						},
  maintenance:{
				email:String,
				alert:Boolean,
				error:Boolean
				}, 						
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Device', DeviceSchema);