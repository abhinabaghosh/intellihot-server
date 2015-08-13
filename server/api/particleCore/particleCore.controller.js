'use strict';

var _ = require('lodash');
var ParticleCore = require('./particleCore.model');
var Device = require('../device/device.model');
var request = require('request-json');


// Get list of particleCores
exports.index = function(req, res) {
  ParticleCore.find(function (err, particleCores) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(particleCores);
  });
};

// Get a single particleCore
exports.show = function(req, res) {
  ParticleCore.findById(req.params.id, function (err, particleCore) {
    if(err) { return handleError(res, err); }
    if(!particleCore) { return res.status(404).send('Not Found'); }
    return res.json(particleCore);
  });
};

// Creates a new particleCore in the DB.
exports.create = function(req, res) {
  ParticleCore.create(req.body, function(err, particleCore) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(particleCore);
  });
};


exports.heaterOnOff = function(req, res) {

  //console.log("argument value 1"+req.body.deviceId);
  //console.log("argument value 2"+req.body.heaterOnOff);

  var baseUrl=process.env.BACKEND_BASEURL || 'http://192.168.1.15:8080';
  var client = request.createClient(baseUrl);
  var functionName='heaterOnOff';
  //var functionName='led';
  var url='/v1/devices/'+req.body.deviceId+'/'+functionName+'?access_token='+req.body.backEndAccessToken;
  var data = {
              args: req.body.heaterOnOff
  };
  //spark.callFunction(devices[0].id, 'digitalwrite', 'D0:HIGH', callback);

  client.post(url,data, function(err, response, body) {
    //console.log(body);
    return res.json(body);
  });
    /* */
};


exports.setHeaterTemperature = function(req, res) {

  //console.log("argument value 1"+req.body.deviceId);
  //console.log("argument value 2"+req.body.heaterTemperature);

  var baseUrl=process.env.BACKEND_BASEURL || 'http://192.168.1.15:8080';
  var client = request.createClient(baseUrl);
  var functionName='setTemperature';
  var url='/v1/devices/'+req.body.deviceId+'/'+functionName+'?access_token='+req.body.backEndAccessToken;
  var data = {
              args: req.body.heaterTemperature
  };

  //spark.callFunction(devices[0].id, 'digitalwrite', 'D0:HIGH', callback);
  client.post(url,data, function(err, response, body) {
    //console.log(body);
    return res.json(body);
  });
  /* */
 
};




exports.postCoreValue = function(req, res) {



  Device.findOne({ deviceId:req.body.coreId}, function (err, device) {
    if (err) { return handleError(res, err); }
    if(!device) { return res.send(404); }

    delete req.body.coreId; 

    //device.heaterData=req.body;

    device.heaterData.packetLength=req.body.packetLength;
    device.heaterData.serialNumber=req.body.serialNumber;
    device.heaterData.inletTemp=req.body.inletTemp;
    device.heaterData.outletTemp=req.body.outletTemp;
    device.heaterData.dhTemp=req.body.dhTemp;
    //device.heaterData.updateTime=new Date().toDateString();
    device.heaterData.updateTime=new Date().toLocaleString();

    device.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, device);
    });

  });



//54ff72066672524847531067

};


// Updates an existing particleCore in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  ParticleCore.findById(req.params.id, function (err, particleCore) {
    if (err) { return handleError(res, err); }
    if(!particleCore) { return res.status(404).send('Not Found'); }
    var updated = _.merge(particleCore, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(particleCore);
    });
  });
};

// Deletes a particleCore from the DB.
exports.destroy = function(req, res) {
  ParticleCore.findById(req.params.id, function (err, particleCore) {
    if(err) { return handleError(res, err); }
    if(!particleCore) { return res.status(404).send('Not Found'); }
    particleCore.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}