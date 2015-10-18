'use strict';

var config = require('config');
var express = require('express');
var router = express.Router(config.routerOptions);
var fs = require('fs');
var path = require('path');
var basename = path.basename(module.filename);

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
