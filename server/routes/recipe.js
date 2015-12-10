var express = require('express');
var config = require('config');
var router = express.Router(config.routerOptions);

router.route('/recipe')
  .get(function (req, res, next) {
    res.send('success');
    //TODO: return recipes
  })
  .post(function (req, res) {
    //TODO: create
  })
  .put(function (req, res) {
    //TODO: update
  })
  .delete(function (req, res) {
    //TODO: delete
  });

module.exports = router;
