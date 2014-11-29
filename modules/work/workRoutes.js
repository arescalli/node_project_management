var express = require('express');

var workModule = require('./workService');
var router = express.Router();

/* GET users listing. */
router.get('/', workModule.findAllWorks);

router.get('/:id', workModule.getWorkById);

router.post('/', workModule.createWork);

module.exports = router;
