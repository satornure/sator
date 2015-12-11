'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('ingredients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(30)
      },
      description: {
        allowNull: true,
        type: Sequelize.TEXT
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('ingredients');
  }
};
