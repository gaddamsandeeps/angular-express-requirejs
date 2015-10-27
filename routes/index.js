var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	console.log("/////");
  res.render('first.html', { title: 'Express' });
});

router.get('/two', function(req, res) {
	console.log("/two/two/two");
  res.render('two.html', {
        msg: "Welcome"
    });
});



module.exports = router;
