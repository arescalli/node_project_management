
var models  = require('../../models');

exports.findAllProjects = function(req, res) {	
	models.Project.findAll().success(function(projects) {
		res.json(projects);
	});  
};


exports.getProjectById = function(req, res) {
	models.Project.find({where: {id: req.params.id}}).success(function(project) {
		res.json(project);	
	});	
};

exports.createProject = function(req, res) {	
	models.Project.create(req.body).success(function(project) {
		res.json(project);	
	});	
};

exports.createSampleProjects = function(req, res) {	
	var elementsToCreate = [];
	for (var i = 0; i < 4000; i++) {
		console.log(i);
		elementsToCreate.push({name : 'Pippo ' + i, description: 'desc for ' + i})		
	}
	
	models.Project.bulkCreate(elementsToCreate).success(function() { // Notice: There are no arguments here, as of right now you'll have to...
  models.Project.findAll().success(function(projects) {
  	res.json(projects);  
  })
})

	
};

