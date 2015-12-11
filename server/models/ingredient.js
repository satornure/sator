'use strict';

module.exports = function(sequelize, DataTypes) {
  var Ingredient = sequelize.define('Ingredient', {
    name: DataTypes.STRING(30),
    description: DataTypes.TEXT
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'ingredients'
  });
  return Ingredient;
};
