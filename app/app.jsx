import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
/* eslint-disable */
import Main from 'Main';
import RecipeList from 'RecipeList';
import AddRecipe from 'AddRecipe';
import EditRecipe from 'EditRecipe';
import store from 'configureStore';
import recipesAPI from 'recipesAPI';
import actions from 'actions';

store.subscribe(() => {
  const state = store.getState();
  recipesAPI.setRecipes(state.recipes);
});

const initialRecipes = recipesAPI.getRecipes();
store.dispatch(actions.addRecipes(initialRecipes));

// Load foundation

$(document).foundation();
// App css
require('style!css!sass!applicationStyles');
/* eslint-enable */

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <Route path="create" component={AddRecipe} />
        <Route path="edit/:id" component={EditRecipe} />
        <IndexRoute component={RecipeList} />
      </Route>
    </Router>
  </Provider>,
    document.getElementById('app')); //eslint-disable-line
