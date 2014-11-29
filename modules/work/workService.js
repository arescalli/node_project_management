
var models  = require('../../models');

exports.findAllWorks = function(req, res) {	
	models.Work.findAll().success(function(works) {
		res.json(works);
	});  
};


exports.getWorkById = function(req, res) {
	models.Work.find({where: {id: req.params.id}}).success(function(work) {
		res.json(work);	
	});	
};

exports.createWork = function(req, res) {	
	models.Work.create(req.body).success(function(work) {
		res.json(work);	
	});	
};