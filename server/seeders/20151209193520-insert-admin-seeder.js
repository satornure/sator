'use strict';

var bcrypt = require('bcrypt-nodejs');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
      name: 'Admin',
      email: 'admin@example.com',
      username: 'admin',
      password: bcrypt.hashSync('admin'),
      createdAt: Date.now()
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
