'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface
      .createTable('recipes', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        title: {
          allowNull: false,
          type: Sequelize.STRING(30)
        },
        description: {
          type: Sequelize.TEXT
        },
        rate: {
          allowNull: false,
          type: Sequelize.FLOAT
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      }, {
        engine: 'InnoDB',
        charset: 'utf8'
      });
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('recipes');
  }
};
