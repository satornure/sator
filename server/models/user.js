'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    login: DataTypes.STRING,
    password:DataTypes.STRING
  }, {
    classMethods: {

    },
    updatedAt: false,
    underscored: true,
    freezeTableName: true,
    tableName: 'users'
  });
  return User;
};