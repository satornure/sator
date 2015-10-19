var express = require('express');
var config = require('config');
var router = express.Router(config.routerOptions);
var auth = require('../lib/auth');
var User = require('../models').User;

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', function(req, res, next) {
  var data = {
    name: 'test',
    email: 'test@example.com',
    password: 'asdasddasdasdasdd',
    login: 'test',
    createdAt: Date.now()
  };

  User.create(data).then(function (user) {
    console.log(user);
  });
});

module.exports = router;
