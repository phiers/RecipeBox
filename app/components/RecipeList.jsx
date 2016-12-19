import React, { Component, PropTypes } from 'react';
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
      const sortedRecipes = recipesAPI.getRecipes().sort((a, b) => a.name > b.name);
      return sortedRecipes.map(recipe =>
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

RecipeList.propTypes = {
  recipes: PropTypes.array, // eslint-disable-line
};
