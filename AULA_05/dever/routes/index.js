var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title : "Home"});
});

// ################## INICIO DE FOTOS
router.get('/fotos', function(req, res, next) {
  res.render('fotos', {title : "Fotos"});
});

router.get('/fotos/novas', function(req, res, next) {
  res.render('novas-fotos', {title : "Fotos"});
});
// ################### FIM DE FOTOS

router.get('/videos', function(req, res, next) {
  res.render('videos',{title : "Videos"} );
});

module.exports = router;
