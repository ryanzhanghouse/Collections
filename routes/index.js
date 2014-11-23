var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'My collections' });
})

router.get('/book', function(req, res) {
  res.render('book', { title: 'Books I read' });
});

router.get('/movie', function(req, res) {
  res.render('movie', { title: 'Movies I watched' });
});

router.get('/music', function(req, res) {
  res.render('music', { title: 'Music I love' });
});

router.get('/about', function(req, res) {
  res.render('about', { title: 'About me' });
});

module.exports = router;
