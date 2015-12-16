'use strict';

module.exports = function(sequelize, DataTypes) {
  var RecipeIngredient = sequelize.define('RecipeIngredient', {

  }, {
    classMethods: {
      associate: function(models) {
        RecipeIngredient.hasMany(models.Recipe, {
          as: 'recipes',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          foreignKey: {
            allowNull: false
          }
        });

        RecipeIngredient.hasMany(models.Ingredient, {
          as: 'ingredient',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          foreignKey: {
            allowNull: false
          }
        });
      }
    },
    timestamps: false,
    freezeTableName: true,
    tableName: 'recipe_ingredients'
  });
  return RecipeIngredient;
};
