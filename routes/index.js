var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
})

router.get('/book', function(req, res) {
  res.render('book');
});

router.get('/movie', function(req, res) {
  res.render('movie');
});

router.get('/music', function(req, res) {
  res.render('music');
});

router.get('/about', function(req, res) {
  res.render('about');
});

module.exports = router;
