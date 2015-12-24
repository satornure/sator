'use strict';

module.exports = function(sequelize, DataTypes) {
  var Bookmark = sequelize.define('Bookmark', {

  }, {
    classMethods: {
      associate: function(models) {
        Bookmark.hasMany(models.Recipe, {
          as: 'recipe',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          foreignKey: {
            allowNull: false
          }
        });

        Bookmark.hasMany(models.User, {
          as: 'user',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          foreignKey: {
            allowNull: false
          }
        });
      }
    },
    timestamps: false,
    freezeTableName: true,
    tableName: 'bookmarks'
  });
  return Bookmark;
};
