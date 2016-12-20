import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
        return <Link to="/create">Click here to add your first recipe!</Link>;
      }
      const sortedRecipes = recipesAPI.getRecipes().sort((a, b) => a.name > b.name);
      return sortedRecipes.map(recipe =>
        <Recipe key={recipe.id} {...recipe} />,
      );
    };

    return (
      <div>
        <div className="recipe-list">
          <ReactCSSTransitionGroup
            transitionName="recipe-anim"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            {renderRecipes()}
          </ReactCSSTransitionGroup>
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
