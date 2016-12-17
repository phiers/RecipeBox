import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

/* eslint-disable max-len */

class Recipe extends Component {
  render() {
    const { name, notes, ingredients } = this.props;
    const renderIngredientsList = () => {
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
            <Link to="/edit/123" className="button success">Edit</Link>
            <a className="button alert">Delete</a>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Recipe);
