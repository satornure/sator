'use strict';
module.exports = function(sequelize, DataTypes) {
  var Recipe = sequelize.define('Recipe', {
    name: DataTypes.STRING(30),
    description: DataTypes.TEXT,
    rate: DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    freezeTableName: true,
    tableName: 'recipes'
  });
  return Recipe;
};
