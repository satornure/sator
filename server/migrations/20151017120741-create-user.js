'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return [
      queryInterface.createTable('users', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING
        },
        email: {
          allowNull: false,
          type: Sequelize.STRING
        },
        login: {
          allowNull: false,
          type: Sequelize.STRING
        },
        password: {
          allowNull: false,
          type: Sequelize.STRING
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      }),
      queryInterface.addIndex('users',
        ['email'],
        {
          name: 'unq_users_email',
          indicesType: 'UNIQUE'
        }
      )
    ];
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('users');
  }
};