'use strict';

var express = require('express');
var controller = require('./device.controller');
var auth = require('../../auth/auth.service');
var router = express.Router();

//router.get('/',auth.isAuthenticated() ,controller.index);
router.get('/' ,controller.index);
router.get('/user/:id' ,controller.showUserDevices);
router.get('/test' ,controller.test);
router.get('/test1' ,controller.test1);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;


