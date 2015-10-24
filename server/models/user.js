var bcrypt = require('bcrypt-nodejs');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password:DataTypes.STRING
  }, {
    classMethods: {
      validPassword: function (password) {
        return bcrypt.compareSync(password, this.password);
      },
      isValid: function (data) {

      }
    },
    updatedAt: false,
    underscored: true,
    freezeTableName: true,
    tableName: 'users'
  });
  return User;
};