import React, { Component, PropTypes } from 'react';

/* eslint-env browser */

export default class RecipeItem extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(evt) {
    evt.preventDefault();
    const qnty = document.querySelector('.qnty-add').value;
    const ingredient = document.querySelector('.ingredient-add').value;
    this.props.addItem(qnty, ingredient);
    document.querySelector('.qnty-add').value = '';
    document.querySelector('.qnty-add').focus();
    document.querySelector('.ingredient-add').value = '';
  }
  render() {
    return (
      <div className="ingredients-list-item">
        <input type="text" className="qnty-add" placeholder="quantity" />
        <input type="text" className="ingredient-add" placeholder="ingredient" />
        <button onClick={this.handleClick} className="button default small">+</button>
      </div>
    );
  }
}

RecipeItem.propTypes = {
  addItem: PropTypes.func.isRequired,
};
