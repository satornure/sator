'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .createTable('bookmarks', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        user: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'users',
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
          'bookmarks',
          ['user', 'recipe'],
          {indexName: 'unq_bookmarks_user_recipe', indicesType: 'UNIQUE'}
        );
      });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('bookmarks');
  }
};
