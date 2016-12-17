import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

/* eslint-disable */
import Recipe from 'Recipe';
import recipesAPI from 'recipesAPI';
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
        <Link to="/create" className="button success create">Add New Recipe</Link>
        <div className="recipe-list">
          {renderRecipes()}
        </div>
      </div>
    );
  }
}
// this makes redux state available as props
export default connect(state => state)(RecipeList);
