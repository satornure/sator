var bcrypt = require('bcrypt-nodejs');
var UserModel = require('../../models').User;
var validator = require('validator');

var User = function (user) {
  this.user = user;
};

User.prototype.set = function (user) {
  this.user = user;
};

User.prototype.get = function (id, email) {
  if (!validator.isNull(id)) {
    return UserModel.findOne({where: {id: id}});
  }
  if (!validator.isNull(email)) {
    return UserModel.findOne({where: {email: email}});
  }
  return UserModel.findAll();
};

User.prototype.create = function (data) {
  data.createdAt = Date.now();
  return UserModel.create(data);
};

User.prototype.validPassword = function (password) {
  return bcrypt.compareSync(password, this.user.password);
};

module.exports = User;
