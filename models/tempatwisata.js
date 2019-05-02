'use strict';
module.exports = (sequelize, DataTypes) => {
  const TempatWisata = sequelize.define('TempatWisata', {
    destinasi: DataTypes.STRING,
    paket: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    fasilitas: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  TempatWisata.associate = function(models) {
    // associations can be defined here
  };
  return TempatWisata;
};
