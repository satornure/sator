'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface
      .createTable('ingredients', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        title: {
          allowNull: false,
          type: Sequelize.STRING(30)
        }
      }, {
        engine: 'InnoDB',
        charset: 'utf8'
      });
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('ingredients');
  }
};
