'use strict';

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING(20),
    email: DataTypes.STRING(50),
    username: DataTypes.STRING(20),
    password: DataTypes.STRING(32),
    createdAt: DataTypes.INTEGER
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'users'
  });
  return User;
};
