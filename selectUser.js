const models = require("./models");

models.User.findAll({include: [{model: models.Peserta}]}).then(users => {
  users.forEach(user => {
    console.log(`User: ${user.email} | ${user.password} | ${user.role}`);
    console.log(`Peserta: ${user.Peserta.map(peserta => peserta.alamat).join(', ')}`);
  })
}).catch(err => console.log(err))
