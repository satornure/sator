var express = require('express');
var config = require('config');
var router = express.Router(config.routerOptions);
var recipeValidation = require('../validation').recipe;
var Recipe = new (require('../lib/recipe'));

router.route('/recipe(/update-ingredients)?')
  .get(function (req, res, next) {
    res.send('success');
    //TODO: return recipes
  })
  .post(function (req, res, next) {
    req.checkBody(recipeValidation);

    var errors = req.validationErrors();

    if (errors) {
      return next(Error(errors));
    }

    return Recipe
      .create(req.body)
      .then(function (recipe) {
        return res.send(recipe);
      })
      .catch(function (error) {
        return next(error);
      });
  })
  .put(function (req, res, next) {
    if (!req.params.updateIngredients) {
      return next();
    }

    Recipe
      .get(req.body.recipe)
      .then(function (recipe) {
        Recipe.removeIngredient()
      })
  })
  .put(function (req, res, next) {
    req.checkBody(recipeValidation);

    var errors = req.validationErrors();

    if (errors) {
      return next(Error(errors));
    }

    return Recipe
      .update(req.body)
      .then(function (recipe) {
        return res.send(recipe);
      })
      .catch(function (error) {
        return next(error);
      });
  })
  .delete(function (req, res, next) {
    return Recipe
      .delete(req.body)
      .then(function () {
        return res.send();
      })
      .catch(function (error) {
        return next(error);
      });
  });

module.exports = router;
