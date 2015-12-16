var models = require('../../models');
var RecipeModel = models.Recipe;
var RecipeIngredientModel = models.RecipeIngredient;

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
    ingredient: ingredient.id,
    recipe: this.recipe.id
  };
  return RecipeIngredientModel.create(data);
};

Recipe.prototype.removeIngredient = function (ingredient) {
  return RecipeIngredientModel.destroy({
    where: {recipe: this.recipe.id, ingredient: ingredient.id}
  });
};

module.exports = Recipe;
