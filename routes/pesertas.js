var express = require('express');
var router = express.Router();
const models = require('../models');
const {checkAuth } = require('../middelwares/auth')

/* GET users listing. */
router.get('/', checkAuth,  function(req, res, next) {
  const user = req.session.user
  console.log(user);
  models.Peserta.findAll().then(pesertas => {
console.log('---- data peserta -------');
    console.log(pesertas);
    res.render('peserta/index',{pesertas: pesertas, user : user})
  }).catch(err => {
    console.log(err);
    res.render('peserta/index')
  })
});

router.get('/create', checkAuth, (req, res) => {
  res.render('peserta/create')
});

router.get('/delete/:id' , (req, res) => {
  const pesertaId = req.params.id
  models.Peserta.findOne({where: {id: pesertaId}}).then(peserta => {
    return peserta.destroy()
  }).then(peserta => {
    res.redirect('/pesertas')
  }).catch(err => {
    console.log(err)
    res.redirect('/pesertas')
  })
});

router.get('/edit/:id',(req, res) => {
  const pesertaId = req.params.id
  models.Peserta.findOne({where: {id: pesertaId}}).then(peserta => {
    res.render('peserta/edit',{peserta: peserta})
    }).catch(err => {
    console.log(err)
    res.redirect('/pesertas')
  })
});

router.post('/create', (req, res) => {
  const { nama, alamat, destinasi, paket } = req.body
  models.Peserta.create({nama, alamat, destinasi, paket}).then(peserta => {
    res.redirect('/pesertas')
  }).catch(err => {
    console.log(err)
    res.redirect('/pesertas')
  })
});

router.post('/edit/:id', function(req, res){
  const pesertaId =req.params.id
  const {nama, alamat, destinasi, paket} = req.body
  models.Peserta.findOne({where : {id: pesertaId}}).then(peserta =>{
    return peserta.update({
      nama,
      alamat
    })
  }).then(updatedPeserta => {
    res.redirect('/pesertas')
  }).catch(err => {
    console.log(err)
    res.redirect('/pesertas')
  })
});

module.exports = router;
