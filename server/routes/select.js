var express = require('express');
var config = require('config');
var router = express.Router(config.routerOptions);
var service = require('../lib/select');

router.get('/select-ingredient', function (req, res, next) {
  service.selectIngredients(req.query.q, function (data, error) {
    if (error) {
      return next(error);
    }

    res.send(data);
  });
});