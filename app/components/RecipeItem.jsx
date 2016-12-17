import React, { Component, PropTypes } from 'react';

/* eslint-env browser */

export default class RecipeItem extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(evt) {
    evt.preventDefault();
    const qnty = document.querySelector('.qnty').value;
    const ingredient = document.querySelector('.ingredient').value;
    this.props.addItem(qnty, ingredient);
    document.querySelector('.qnty').value = '';
    document.querySelector('.qnty').focus();
    document.querySelector('.ingredient').value = '';
  }
  render() {
    return (
      <div className="ingredients-list-item">
        <input type="text" className="qnty" placeholder="quantity" />
        <input type="text" className="ingredient" placeholder="ingredient" />
        <button onClick={this.handleClick} className="button default small">+</button>
      </div>
    );
  }
}

RecipeItem.propTypes = {
  addItem: PropTypes.func.isRequired,
};
