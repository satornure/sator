'use strict';
module.exports = function(sequelize, DataTypes) {
  var Ingredient = sequelize.define('Ingredient', {
    name: DataTypes.STRING(30),
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    updatedAt: false,
    createdAt: false,
    freezeTableName: true,
    tableName: 'ingredients'
  });
  return Ingredient;
};
