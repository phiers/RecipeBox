const actions = {
  addIngredient(ingredient) { // might not need
    return {
      type: 'ADD_INGREDIENT',
      ingredient,
    };
  },
  addRecipe(recipe) {
    return {
      type: 'ADD_RECIPE',
      recipe,
    };
  },
  addRecipes(recipes) {
    return {
      type: 'ADD_RECIPES',
      recipes,
    };
  },
  editRecipe(id) {
    return {
      type: 'EDIT_RECIPE',
      id,
    };
  },
  setSearchText(searchText) {
    return {
      type: 'SET_SEARCH_TEXT',
      searchText,
    };
  },
  toggleRecipeDetails(id) {
    return {
      type: 'TOGGLE_RECIPE_DETAILS',
      id,
    };
  },
};

export default actions;
