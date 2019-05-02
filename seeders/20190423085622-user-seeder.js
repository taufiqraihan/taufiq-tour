'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {

    const password = bcrypt.hashSync("rahasia", 10);
    return queryInterface.bulkInsert('Users', [{
      email: 'taufiqraihan9mn@gmail.com',
      password: password ,
      role: 'admin',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      email: 'taufiqbot@gmail.com',
      password: password ,
      role: 'admin',
      createdAt : new Date(),
      updatedAt : new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {

          return queryInterface.bulkDelete('Users', null, {});
  }
};
