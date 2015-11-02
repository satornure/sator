var express = require('express');
var config = require('config');
var router = express.Router(config.routerOptions);
var auth = require('../lib/auth');
var User = require('../models').User;

/* GET users listing. */
router.post('/login', auth.passport.authenticate('local'));

router.post('/register', function(req, res, next) {
  User.isValid(req.body, function (valid, err) {
    if (err) {
      return next(err);
    }

    User.create(req.body).then(function (user) {
      res.send(user);
    });
  });
});

module.exports = router;
