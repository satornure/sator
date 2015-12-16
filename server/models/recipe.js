'use strict';

module.exports = function(sequelize, DataTypes) {
  var Recipe = sequelize.define('Recipe', {
    title: DataTypes.STRING(30),
    description: DataTypes.TEXT,
    rate: DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function (models) {
        Recipe.belongsTo(models.RecipeIngredient, {
          as: 'recipeIngredient',
          constraints: false
        })
      }
    },
    timestamps: false,
    freezeTableName: true,
    tableName: 'recipes'
  });
  return Recipe;
};
