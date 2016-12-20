import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


import actions from 'actions'; // eslint-disable-line
/* eslint-disable max-len */

class Recipe extends Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle() {
    const dispatch = this.props.dispatch;
    dispatch(actions.toggleRecipeDetails(this.props.id));
  }
  handleDelete() {
    const id = this.props.id;
    const dispatch = this.props.dispatch;
    dispatch(actions.removeRecipe(id));
  }
  render() {
    const { id, expanded, name, notes, ingredients } = this.props;
    const showDetail = expanded ? 'card-detail show' : 'card-detail';
    const renderIngredientsList = () => {
      if (ingredients.length === 0) { return <p>None</p>; }
      return ingredients.map(i => (
        <p key={i.id} className="ingredients">
          <span className="qnty">{i.qnty}</span>
          <span className="ingredient">{i.item}</span>
        </p>
        ),
      );
    };

    return (
      <div className="card">
        <div className="card-header">
          <h4>{name}</h4>
          <button onClick={this.handleToggle}>+</button>
        </div>
        <div className={showDetail}>
          <h5>Ingredients:</h5>
          <div className="ingredient-list">
            {renderIngredientsList()}
          </div>
          <h5>Notes:</h5>
          <p>{notes}</p>
          <hr />
          <div className="button-group">
            <Link to={`edit/${id}`} className="button success">Edit</Link>
            <button onClick={this.handleDelete} className="button alert">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Recipe);

Recipe.propTypes = {
  id: PropTypes.string,
  expanded: PropTypes.bool,
  name: PropTypes.string,
  ingredients: PropTypes.array, // eslint-disable-line
  notes: PropTypes.string,
  dispatch: PropTypes.func,
};
