'use strict';

var express = require('express');
var controller = require('./particleCore.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.post('/postCoreValue', controller.postCoreValue);
router.post('/heaterOnOff', controller.heaterOnOff);
router.post('/setHeaterTemperature', controller.setHeaterTemperature);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;