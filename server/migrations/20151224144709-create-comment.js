'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      message: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    }, {
      engine: 'InnoDB',
      charset: 'utf8'
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Comments');
  }
};
