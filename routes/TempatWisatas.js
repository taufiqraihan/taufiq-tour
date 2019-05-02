var express = require('express');
var router = express.Router();
const models = require('../models');
const {checkAuth } = require('../middelwares/auth')

/* GET users listing. */
router.get('/', checkAuth,  function(req, res, next) {
  let user = req.session.user;
  console.log(('data session user'));
  console.log(user);
  models.TempatWisata.findAll().then(TempatWisatas => {
    res.render('TempatWisata/index',{TempatWisatas: TempatWisatas, user : user})
  }).catch(err => {
    console.log(err);
    res.render('TempatWisata/index')
  })
});

router.get('/create', checkAuth, (req, res) => {
  res.render('TempatWisata/create')
});

router.get('/delete/:id' , (req, res) => {
  const TempatWisataId = req.params.id
  models.TempatWisata.findOne({where: {id: TempatWisataId}}).then(TempatWisata => {
    return TempatWisata.destroy()
  }).then(TempatWisata => {
    res.redirect('/TempatWisatas')
  }).catch(err => {
    console.log(err)
    res.redirect('/TempatWisatas')
  })
});

router.get('/edit/:id',(req, res) => {
  const TempatWisataId = req.params.id
  models.TempatWisata.findOne({where: {id: TempatWisataId}}).then(TempatWisata => {
    res.render('TempatWisata/edit',{TempatWisata: TempatWisata})
    }).catch(err => {
    console.log(err)
    res.redirect('/TempatWisatas')
  })
});

router.post('/create', (req, res) => {
  const { destinasi, paket, harga, fasilitas, image } = req.body
  models.TempatWisata.create({ destinasi, paket, harga, fasilitas, image }).then(TempatWisata => {
    res.redirect('/TempatWisatas')
  }).catch(err => {
    console.log(err)
    res.redirect('/TempatWisatas')
  })
});

router.post('/edit/:id', function(req, res){
  const TempatWisataId =req.params.id
  const { destinasi, paket, harga, fasilitas, image } = req.body
  models.TempatWisata.findOne({where : {id: TempatWisataId}}).then(TempatWisata =>{
    return TempatWisata.update({
      destinasi,
      paket,
      harga,
      fasilitas
    })
  }).then(updatedTempatWisata => {
    res.redirect('/TempatWisatas')
  }).catch(err => {
    console.log(err)
    res.redirect('/TempatWisatas')
  })
});

module.exports = router;
