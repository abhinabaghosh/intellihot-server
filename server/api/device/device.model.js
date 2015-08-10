'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/*
var DeviceSchema = new Schema({
  deviceId: String,
  name: String,
  user:{ type: Schema.Types.ObjectId, ref: 'Users' },
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
*/

var DeviceSchema = new Schema({
  deviceId: String,
  name: String,
  userId:String,
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
  heaterData:{
        packetLength:String,
        serialNumber:String,
        inletTemp:String,
        outletTemp :String,
        dhTemp:String,
        updateTime:String
        },                 
  info: String,
  active: Boolean
});


module.exports = mongoose.model('Device', DeviceSchema);