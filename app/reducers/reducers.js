
const recipesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      return [
        ...state,
        action.recipe,
      ];
    case 'ADD_RECIPES':
      return [
        ...state,
        ...action.recipes,
      ];

    case 'EDIT_RECIPE': {
      const newState = state.filter(item => item.id !== action.id);
      return [
        ...newState,
        action.editedRecipe,
      ];
    }

    case 'REMOVE_RECIPE':
      // filter creates a new array, so no need to add ...state
      return state.filter(item => item.id !== action.id);

    case 'TOGGLE_RECIPE_DETAILS':
      return state.map((recipe) => {
        if (recipe.id === action.id) {
          const nextExpanded = !recipe.expanded;

          return {
            ...recipe,
            expanded: nextExpanded,
          };
        }
        return recipe;
      });

    default:
      return state;
  }
};

export default recipesReducer;
