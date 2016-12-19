import React, { Component } from 'react';
import { connect } from 'react-redux';

/* eslint-disable */
import Recipe from 'Recipe';
import recipesAPI from 'recipesAPI';
import actions from 'actions';
/* eslint-enable */

class RecipeList extends Component {

  render() {
    const { recipes } = this.props;
    const renderRecipes = () => {
      if (recipes.length === 0) {
        return (
          <p>No recipes yet</p>
        );
      }
      return recipesAPI.getRecipes(recipes).map(recipe =>
        <Recipe key={recipe.id} {...recipe} />,
      );
    };

    return (
      <div>
        <div className="recipe-list">
          {renderRecipes()}
        </div>
      </div>
    );
  }
}
// this makes redux state available as props
export default connect(state => state)(RecipeList);
