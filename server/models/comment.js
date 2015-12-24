'use strict';
module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define('Comment', {
    message: DataTypes.STRING(255)
  }, {
    classMethods: {
      associate: function(models) {
        Comment.hasOne(models.Recipe, {
          as: 'recipe',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          foreignKey: {
            allowNull: false
          }
        });

        Comment.hasMany(models.User, {
          as: 'user',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });
  return Comment;
};