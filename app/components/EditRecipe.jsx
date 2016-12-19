import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import actions from 'actions'; // eslint-disable-line
/* eslint-disable max-len */

class EditRecipe extends Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete() {
    const id = this.props.id;
    const dispatch = this.props.dispatch;
    dispatch(actions.removeRecipe(id));
  }
  render() {
    const { id, name, notes, ingredients } = this.props;

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
          <button>+</button>
        </div>
        <div className="card-detail">
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

export default connect()(EditRecipe);

EditRecipe.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  ingredients: PropTypes.array, // eslint-disable-line
  notes: PropTypes.string,
  dispatch: PropTypes.func,
};
