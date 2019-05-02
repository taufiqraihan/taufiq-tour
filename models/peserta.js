'use strict';
module.exports = (sequelize, DataTypes) => {
  const Peserta = sequelize.define('Peserta', {
    nama: DataTypes.STRING,
    alamat: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {});
  Peserta.associate = function(models) {
    // associations can be defined here
    Peserta.belongsTo(sequelize.models.User)
  };
  return Peserta;
};
