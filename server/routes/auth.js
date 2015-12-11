var express = require('express');
var config = require('config');
var router = express.Router(config.routerOptions);
var auth = require('../lib/auth');
var User = new (require('../lib/user'))();
var userValidation = require('../validation').user;

router.post('/login', auth.passport.authenticate('local'));

router.post('/register', function(req, res, next) {
  req.check(userValidation);

  var errors = req.validationErrors();

  if (errors) {
    return next(Error(errors));
  }
  return User.get(null, req.body.email)
    .then(function (user) {
      if (user) {
        return Error('The email is used');
      }

      return User.create(req.body);
    })
    .then(function (data) {
      return res.send(data);
    });
});

module.exports = router;
