import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class AddRecipe extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addLine = this.addLine.bind(this);
  }
  handleSubmit(evt) {
    evt.preventDefault();
    /* eslint-disable no-undef */
    const name = document.getElementById('name').value;
    const ingredients = document.querySelector('.ingredient').value;
    const quantity = document.querySelector('.qnty').value;
    const notes = document.getElementById('notes').value;
    const newRecipe = {
      expanded: true,
      name,
      notes,
      ingredients: [
        {
          quantity,
          item: ingredients,
        },
      ],
    };
    console.log(newRecipe);
  }
  /* eslint-enable no-undef */
  addLine() {
    return (
      <div className="ingredient-list">
        <input type="text" className="qnty" placeholder="quantity" />
        <input type="text" className="ingredient" placeholder="ingredient" />
        <button onClick={this.addLine}>+</button>
      </div>
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
              <div className="ingredient-list">
                <input type="text" className="qnty" placeholder="quantity" />
                <input type="text" className="ingredient" placeholder="ingredient" />
              </div>
              <div className="ingredient-list">
                <input type="text" className="qnty" placeholder="quantity" />
                <input type="text" className="ingredient" placeholder="ingredient" />
              </div>
              <div className="ingredient-list">
                <input type="text" className="qnty" placeholder="quantity" />
                <input type="text" className="ingredient" placeholder="ingredient" />
              </div>
              <div className="ingredient-list">
                <input type="text" className="qnty" placeholder="quantity" />
                <input type="text" className="ingredient" placeholder="ingredient" />
              </div>
              <div className="ingredient-list">
                <input type="text" className="qnty" placeholder="quantity" />
                <input type="text" className="ingredient" placeholder="ingredient" />
              </div>
              <div className="ingredient-list">
                <input type="text" className="qnty" placeholder="quantity" />
                <input type="text" className="ingredient" placeholder="ingredient" />
              </div>
              <div className="ingredient-list">
                <input type="text" className="qnty" placeholder="quantity" />
                <input type="text" className="ingredient" placeholder="ingredient" />
              </div>
            </div>
            <button className="secondary button small" onClick={this.addLine}>Add Line</button>
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
