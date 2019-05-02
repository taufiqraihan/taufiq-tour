'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Peserta', [{
      nama: 'John',
      alamat : 'Bandung',
      UserId : 1,
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      nama: 'Doe',
      alamat : 'Bandung',
      UserId : 2,
      createdAt : new Date(),
      updatedAt : new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {

          return queryInterface.bulkDelete('Peserta', null, {});
  }
};
