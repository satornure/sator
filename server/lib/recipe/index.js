var models = require('../../models');
var RecipeModel = models.Recipe;
var RecipeIngredientModel = models.RecipeIngredient;
var Ingredient = new (require('../ingredient'));

var Recipe = function (recipe) {
  this.recipe = recipe;
};

Recipe.prototype.set = function (recipe) {
  this.recipe = recipe;
};

Recipe.prototype.get = function (id, options) {
  if (id) {
    if (Array.isArray(id)) {
      return RecipeModel.findAll({where: {id: id}});
    }
    return RecipeModel.findOne({where: {id: id}});
  }
  if (options) {
    return;
  }
  return RecipeModel.findAll();
};

Recipe.prototype.create = function (data) {
  return Recipe.create(data);
};

Recipe.prototype.update = function (data) {
  return Recipe.updateAttributes(data);
};

Recipe.prototype.delete = function () {
  return this.recipe.destroy();
};

Recipe.prototype.addIngredient = function (ingredient) {
  var data = {
    recipe: this.recipe.id,
    ingredient: ingredient.id
  };

  return RecipeIngredientModel.create(data);
};

Recipe.prototype.updateIngredients = function (ids) {
  var self = this;
  return this
    ._removeIngredients(ids)
    .then(function () {
      return self._filterExistingIngredients(ids);
    })
    .then(function (filteredIds) {
      return Ingredient.get(filteredIds);
    })
    .then(function (ingredients) {
      var promises = [];
      ingredients.forEach(function (ingredient) {
        promises.push(self.addIngredient(ingredient));
      });

      //TODO: check if module exist
      return Promise.all(promises);
    });
};

Recipe.prototype._removeIngredients = function (ids) {
  return RecipeIngredientModel.destroy({
    where: {
      recipe: this.recipe.id,
      ingredient: {$notIn: ids}
    }
  });
};

Recipe.prototype._filterExistingIngredients = function (ids) {
  return RecipeIngredientModel
    .findAll({where: {recipe: this.recipe.id, ingredient: ids}})
    .then(function (recipeIngredients) {
      var notExist = ids.slice();
      recipeIngredients.forEach(function (item) {
        var position = notExist.indexOf(item.id);
        if (-1 !== position) {
          notExist.splice(position, 1);
        }
      });
      return notExist;
    });
};

module.exports = Recipe;
