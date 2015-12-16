var models = require('../../models');
var IngredientModel = models.Ingredient;
var RecipeIngredientModel = models.RecipeIngredient;

var Ingredient = function (ingredient) {
  this.ingredient = ingredient;
};

Ingredient.prototype.get = function (id, options) {
  if (id) {
    if (Array.isArray(id)) {
      return IngredientModel.findAll({where: {id: id}});
    }
    return IngredientModel.findOne({where: {id: id}});
  }
  if (options) {
    return;
  }
  return IngredientModel.findAll();
};

Ingredient.prototype.create = function (data) {
  return IngredientModel.create(data);
};

Ingredient.prototype.update = function (data) {
  return IngredientModel.updateAttributes(data);
};

Ingredient.prototype.delete = function () {
  return this.ingredient.destroy();
};

Ingredient.prototype.addToRecipe = function (recipe) {
  var data = {
    ingredient: this.ingredient.id,
    recipe: recipe.id
  };
  return RecipeIngredientModel.create(data);
};

Ingredient.prototype.removeFromRecipe = function (recipe) {
  return RecipeIngredientModel.destroy({
    where: {recipe: recipe.id, ingredient: this.ingredient.id}
  });
};

module.exports = Ingredient;