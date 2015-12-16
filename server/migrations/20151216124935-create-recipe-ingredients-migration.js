'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .createTable('recipe_ingredients', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        ingredient: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'ingredients',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        recipe: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'recipes',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      }, {
        engine: 'InnoDB',
        charset: 'utf8'
      })
      .then(function () {
        return queryInterface.addIndex(
          'recipe_ingredients',
          ['ingredient', 'recipe'],
          {indexName: 'unq_recipe_ingredients_ingredient_recipe', indicesType: 'UNIQUE'}
        )
      });
  },

  down: function (queryInterface, Sequelize) {
     return queryInterface.dropTable('recipe_ingredients');
  }
};
