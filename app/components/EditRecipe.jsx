import React, { Component, PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import uuidV4 from 'uuid/v4';

import actions from 'actions'; // eslint-disable-line
import RecipeItem from 'RecipeItem'; // eslint-disable-line
/* eslint-env browser */
/* eslint-disable no-plusplus */

class EditRecipe extends Component {
  constructor() {
    super();
    this.state = { ingredients: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNewItem = this.handleNewItem.bind(this);
  }

  handleNewItem(qnty, item) {
    if (qnty.length > 0 || item.length > 0) {
      const newIngredients = this.state.ingredients;
      this.setState({
        ingredients:
        [...newIngredients, { id: uuidV4(), qnty, item }],
      });
    }
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const { dispatch } = this.props;
    const id = this.props.recipes[0].id;
    const name = document.getElementById('name').value;
    const notes = document.getElementById('notes').value;
    const ingredientsNode = document.querySelectorAll('.ingredients-list-item');
    const ingredients = [];
    for (let i = 0; i < ingredientsNode.length; i++) {
      const qnty = ingredientsNode[i].firstChild.value;
      const item = ingredientsNode[i].lastChild.value;
      const ingredId = uuidV4();
      if (item) {
        ingredients.push({
          id: ingredId,
          qnty,
          item,
        });
      }
    }
    const editedRecipe = {
      id,
      expanded: true,
      name,
      notes,
      ingredients,
    };
    if (editedRecipe.name) {
      dispatch(actions.editRecipe(id, editedRecipe));
      browserHistory.push('/');
    } else {
      document.getElementById('name').focus();
    }
  }

  render() {
    const { name, notes, ingredients } = this.props.recipes[0];
    const newIngredients = this.state.ingredients;
    const renderIngredientsList = () => ingredients.map((i) => {
      if (i.item === '') { return null; }
      return (
        <div key={i.id} className="ingredients-list-item">
          <input type="text" className="qnty-edit" defaultValue={i.qnty} />
          <input type="text" className="ingredient-edit" defaultValue={i.item} />
        </div>
      );
    });
    const renderNewIngredientsList = () => newIngredients.map((i) => {
      if (i.item === '') { return null; }
      return (
        <div key={i.id} className="ingredients-list-item">
          <input type="text" className="qnty-edit-add" defaultValue={i.qnty} />
          <input type="text" className="ingredient-edit-add" defaultValue={i.item} />
        </div>
      );
    });

    return (
      <div className="edit-card">
        <h4>Edit Recipe</h4>
        <form>
          <div className="card-detail">
            <h5>Name:</h5>
            <input type="text" className="recipe-name" id="name" defaultValue={name} />
            <h5>Ingredients:</h5>
            <div className="ingredient-list">
              {renderIngredientsList()}
              {renderNewIngredientsList()}
              <RecipeItem addItem={this.handleNewItem} />
            </div>
            <h5>Notes:</h5>
            <input type="text" id="notes" defaultValue={notes} />
            <hr />
            <div className="button-group">
              <button onClick={this.handleSubmit} className="button success" >Save</button>
              <Link to="/" className="button alert">Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const rs = state.recipes.filter(item => item.id === ownProps.params.id);
  return { recipes: rs };
};

export default connect(mapStateToProps)(EditRecipe);

EditRecipe.propTypes = {
  recipes: PropTypes.array, // eslint-disable-line
  id: PropTypes.string,
  name: PropTypes.string,
  ingredients: PropTypes.array, // eslint-disable-line
  notes: PropTypes.string,
  dispatch: PropTypes.func,
};
