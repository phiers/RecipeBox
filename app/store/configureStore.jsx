import { createStore, combineReducers } from 'redux';
import { recipesReducer } from 'reducers'; // eslint-disable-line

const reducer = combineReducers({
  recipes: recipesReducer,
});

const store = createStore(reducer, {});

export default store;
