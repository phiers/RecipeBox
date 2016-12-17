import React, { Component, PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';

import RecipeItem from 'RecipeItem';  // eslint-disable-line
/* eslint-env browser */

export default class AddRecipe extends Component {
  constructor() {
    super();
    this.state = { ingredients: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
  }
  handleAddItem(qnty, item) {
    if (qnty.length > 0 || item.length > 0) {
      const newIngredients = this.state.ingredients;
      this.setState({
        ingredients:
        [
          ...newIngredients,
          {
            id: Date.now().toString().substring(8),
            qnty,
            item,
          },
        ],
      });
    }
  }
  handleSubmit(evt) {
    evt.preventDefault();
    const name = document.getElementById('name').value;
    const notes = document.getElementById('notes').value;
    const ingredients = this.state.ingredients;
    const newRecipe = {
      expanded: true,
      name,
      notes,
      ingredients,
    };
    if (newRecipe.name) {
      console.log(newRecipe);
      browserHistory.push('/');
    } else {
      document.getElementById('name').focus();
    }
  }
  renderIngredientsList() {
    return this.state.ingredients.map(ingredient =>
      <li key={ingredient.id} className="ingredients-list-item">
        <em>{`${ingredient.qnty}`}</em>{`${ingredient.item}`}
      </li>,
    );
  }
  render() {
    return (
      <div className="add-card">
        <h5>Add New Recipe:</h5>
        <form >
          <div className="card-detail">
            <input type="text" id="name" className="recipe-name" placeholder="recipe name..." />
            <div id="ingredients-list">
              <p>Ingredients:</p>
              <ul>{this.renderIngredientsList()}</ul>
              <RecipeItem addItem={this.handleAddItem} />
            </div>
            <p>Notes:</p>
            <textarea id="notes" placeholder="Enter notes..." />
            <div className="small button-group">
              <button onClick={this.handleSubmit} className="button success" >Save</button>
              <Link to="/" className="button alert">Cancel</Link>
            </div>
          </div>
        </form>
        <Link to="/">Back to List</Link>
      </div>
    );
  }
}
