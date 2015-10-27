var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('mod.html', {
        title: 'Express'
    });
});

router.get('/two', function(req, res) {
    res.render('mod2.html', {
        msg: "Welcome"
    });
});

module.exports = router;
