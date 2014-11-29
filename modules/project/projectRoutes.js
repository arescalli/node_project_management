var express = require('express');

var projectModule = require('./projectService');
var router = express.Router();

/* GET users listing. */
router.get('/', projectModule.findAllProjects);
router.put('/massive', projectModule.createSampleProjects)
router.get('/:id', projectModule.getProjectById);

router.post('/', projectModule.createProject);



module.exports = router;
