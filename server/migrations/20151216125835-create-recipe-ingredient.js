'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface
      .createTable('RecipeIngredients', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        recipe: {
          type: Sequelize.INTEGER
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
    return queryInterface.dropTable('RecipeIngredients');
  }
};