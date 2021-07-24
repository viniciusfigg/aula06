var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users',{title : "Videos"} );
});
router.get('/cursos', function(req, res, next) {
  res.render('user-cursos',{title : "Videos"} );
});
module.exports = router;
