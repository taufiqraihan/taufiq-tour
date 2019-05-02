var express = require('express');
var router = express.Router();
const models = require('../models');
const bcrypt = require('bcrypt');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res) {
  res.render('auth/login');
});

router.post('/login', (req, res) => {
  const { email, password } = req.body
  models.User.findOne({
     where: {
       email:email
     }
  }).then(user => {
    if(user != null) {
      const checkPassword = bcrypt.compareSync(password, user.password);
      if(checkPassword === true){
        req.session.user = {
          email : user.email,
          role : user.role
        }
        console.log("--- data user login -----");
        console.log(user);
        // cek role
        // jika admin tampilkan data pesertas
        // jika bukan admin / peserta tampilkan profil dan tempat Wisata
        // console.log('data user yg login sebagai : ')
        // console.log(user.role);
        // if(user.role === 'admin'){
        //   res.send('halaman admin')
        // }else if(user.role === 'peserta'){
        //   res.send('halaman peserta')
        // }
      if(user.role === 'admin'){
        res.redirect('/pesertas')
        }else if (user.role === 'peserta'){
        res.redirect('/TempatWisatas')}
      } else {
        res.redirect('/users/login')
      }
      } else {
        res.redirect('/users/login')
      }
  })
})

router.get('/logout', function(req, res) {
  req.session.destroy(function(err){
  if(err){
    console.log(err)
  }else{
    res.redirect('/users/login')
  }
  })
});

router.get('/register', (req, res) => {
  res.render('auth/register')
})

router.post('/register', (req, res) => {
  let { email, password } = req.body
  let role = 'peserta'
  password = bcrypt.hashSync(password, 10)
  models.User.create({ email, password, role}).then(user => {
    res.redirect('/users/login')
  }).catch(err => {
    console.log(err)
    res.redirect('/users/register')
  })
});

module.exports = router;
