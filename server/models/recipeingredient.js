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
          as: 'ingredients',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });
  return RecipeIngredient;
};
