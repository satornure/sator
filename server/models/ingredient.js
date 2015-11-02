'use strict';
module.exports = function(sequelize, DataTypes) {
  var Ingredient = sequelize.define('Ingredient', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    updatedAt: false,
    createdAt: false,
    underscored: true,
    freezeTableName: true,
    tableName: 'ingredients'
  });
  return Ingredient;
};
