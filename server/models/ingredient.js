'use strict';

module.exports = function(sequelize, DataTypes) {
  var Ingredient = sequelize.define('Ingredient', {
    title: DataTypes.STRING(30)
  }, {
    classMethods: {
      associate: function (models) {
        Ingredient.belongsTo(models.RecipeIngredient, {
          as: 'ingredients',
          constraints: false
        })
      }
    },
    timestamps: false,
    freezeTableName: true,
    tableName: 'ingredients'
  });
  return Ingredient;
};
