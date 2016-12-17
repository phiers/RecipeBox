/* eslint-env browser */

module.exports = {
  setRecipes(recipes) {
    if (Array.isArray(recipes)) {
      localStorage.setItem('recipes', JSON.stringify(recipes));
    }
    return recipes;
  },
  getRecipes() {
    const stringRecipes = localStorage.getItem('recipes');
    let recipes = [];
    try {
      recipes = JSON.parse(stringRecipes);
    } catch (err) {
      console.log(err);  // eslint-disable-line
    }
    recipes = Array.isArray(recipes) ? recipes : [];

    return recipes;
  },
};
