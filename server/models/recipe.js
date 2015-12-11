'use strict';

module.exports = function(sequelize, DataTypes) {
  var Recipe = sequelize.define('Recipe', {
    name: DataTypes.STRING(30),
    description: DataTypes.TEXT,
    rate: DataTypes.FLOAT
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'recipes'
  });
  return Recipe;
};
