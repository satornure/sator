'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING(20)
        },
        email: {
          allowNull: false,
          type: Sequelize.STRING(50)
        },
        username: {
          allowNull: false,
          type: Sequelize.STRING(20)
        },
        password: {
          allowNull: false,
          type: Sequelize.STRING
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.INTEGER
        }
      })
      .then(function () {
        return queryInterface.addIndex('users', ['email'], {name: 'unq_users_email', indicesType: 'UNIQUE'});
      });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('users');
  }
};
