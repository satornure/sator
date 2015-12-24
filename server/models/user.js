'use strict';

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING(20),
    email: DataTypes.STRING(50),
    username: DataTypes.STRING(20),
    password: DataTypes.STRING(32),
    createdAt: DataTypes.INTEGER
  }, {
    associate: function(models) {
      User.belongsTo(models.Bookmark, {
        as: 'bookmark',
        constraints: false
      });

      User.belongsTo(models.Comment, {
        as: 'comment',
        constraints: false
      });
    },
    timestamps: false,
    freezeTableName: true,
    tableName: 'users'
  });
  return User;
};
