var express = require('express');
var router = express.Router();
const models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  // code ambil data TempatWisata
  // kita mau ambil data nama dan gambar
  models.TempatWisata.findAll().then(dataTempatWisata => {
    // tampilin view
    res.render('index', { tempatWisata: dataTempatWisata });
  }).catch(err => {
    console.log(err);
    res.render('index');
  })
});

module.exports = router;
