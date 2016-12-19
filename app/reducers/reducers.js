
export const recipesReducer = (state = [], action) => {
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
    case 'REMOVE_RECIPE':
      // filter creates a new array, so no need to add ...state
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
};
// removeRecipe(id) {
//   const recipesArray = JSON.parse(localStorage.getItem('recipes'));
//   const newArray = recipesArray.filter(item => item.id !== id);
//   localStorage.setItem('recipes', JSON.stringify(newArray));
// },
