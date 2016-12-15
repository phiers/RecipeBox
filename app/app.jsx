import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
/* eslint-disable */
import Main from 'Main';
import RecipeList from 'RecipeList';
import AddRecipe from 'AddRecipe';
import EditRecipe from 'EditRecipe';

// Load foundation

$(document).foundation();
// App css
require('style!css!sass!applicationStyles');
/* eslint-enable */

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main} >
      <Route path="create" component={AddRecipe} />
      <Route path="edit/:id" component={EditRecipe} />
      <IndexRoute component={RecipeList} />
    </Route>
  </Router>,
    document.getElementById('app')); //eslint-disable-line
