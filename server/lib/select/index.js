var Ingredient = require('../../models').Ingredient;

module.exports = function () {

};

module.exports.prototype.selectIngredients = function (q, done) {
  try {
    Ingredient
      .findAll({
        where: {name: { $like: {name: '%' + q + '%'}}}
      })
      .then(function (ingredients) {
        return done(ingredients);
      })
  } catch (e) {
    done(null, e);
  }
};