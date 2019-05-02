const models = require("./models");

models.Peserta.findAll({include: [{model: models.User}]}).then(pesertas => {
  pesertas.forEach(peserta => {
    console.log(`${peserta.nama} | ${peserta.alamat} | User: ${peserta.User.email} | User: ${peserta.User.role}`)
  })
}).catch(err => console.log(err))
