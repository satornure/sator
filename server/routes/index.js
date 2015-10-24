'use strict';

var config = require('config');
var express = require('express');
var auth = require('../lib/auth');
var router = express.Router(config.routerOptions);
var fs = require('fs');
var path = require('path');
var basename = path.basename(module.filename);

router.use(auth.expressSession);
router.use(auth.passport.initialize());
router.use(auth.passport.session());

router.use(function checkAuth(req, res, next) {
  if (!req.user
    && !/\/login$/.test(req.originalUrl)
    && !/\/register/.test(req.originalUrl)) {
    var error = new Error('Unauthorized');
    error.statusCode = 401;

    return next(error);
  }

  next();
});

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename);
  })
  .forEach(function(file) {
    if (file.slice(-3) !== '.js') return;
    var route = require(path.join(__dirname, file));
    router.use(route);
  });

module.exports = router;
