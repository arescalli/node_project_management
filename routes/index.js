var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Exprdess' });
});

router.get('/projects_list', function(req, res) {
	res.render('projects/index');
});

module.exports = router;
