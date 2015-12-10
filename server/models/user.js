var bcrypt = require('bcrypt-nodejs');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING(20),
    email: DataTypes.STRING(50),
    username: DataTypes.STRING(20),
    password: DataTypes.STRING,
    createdAt: DataTypes.INTEGER
  }, {
    classMethods: {
      validPassword: function (password) {
        return bcrypt.compareSync(password, this.password);
      },
      isValid: function (data, done) {
        User
          .findAll({
            where: sequelize.or({
              username: data.username,
              email: data.email
            })
          })
          .then(function (users) {
            if (users.length) {
              return done(false);
            }

            return done(true);
          });
      }
    },
    timestamps: false,
    freezeTableName: true,
    tableName: 'users'
  });
  return User;
};
