import React, { Component } from 'react';
import { Link } from 'react-router';

/* eslint-disable */
import Recipe from 'Recipe';
/* eslint-enable */

export default class RecipeList extends Component {
  constructor() {
    super();
    this.state = {
      recipes: recipes, //eslint-disable-line
    };
  }
  render() {
    return (
      <div>
        <div className="recipe-list">
          <Recipe recipes={this.state.recipes} />
        </div>
        <Link to="/create" className="button success create">Add New Recipe</Link>
      </div>
    );
  }
}

const recipes = [
  {
    id: 1,
    name: 'Recipe 1',
    expanded: false,
    ingredients: [
      {
        id: 1,
        qnty: '1 tsp',
        item: 'sugar',
      },
      {
        id: 2,
        qnty: '1 tbsp',
        item: 'flour',
      },
      {
        id: 3,
        qnty: '1 20 oz can',
        item: 'whole tomatoes',
      },
      {
        id: 4,
        qnty: '1 pound',
        item: 'spaghetti',
      },
    ],
    notes: 'Recipe handed down by Mom',
  },
  {
    id: 2,
    name: 'Recipe 3',
    expanded: false,
    ingredients: [
      {
        id: 1,
        qnty: '1 tsp',
        item: 'sugar',
      },
      {
        id: 2,
        qnty: '1 tbsp',
        item: 'flour',
      },
      {
        id: 3,
        qnty: '1 20 oz can',
        item: 'whole tomatoes',
      },
      {
        id: 4,
        qnty: '1 pound',
        item: 'spaghetti',
      },
    ],
    notes: 'Recipe handed down by Mom',
  },
  {
    id: 3,
    name: 'Recipe 3',
    expanded: false,
    ingredients: [
      {
        id: 1,
        qnty: '1 tsp',
        item: 'sugar',
      },
      {
        id: 2,
        qnty: '1 tbsp',
        item: 'flour',
      },
      {
        id: 3,
        qnty: '1 20 oz can',
        item: 'whole tomatoes',
      },
      {
        id: 4,
        qnty: '1 pound',
        item: 'spaghetti',
      },
    ],
    notes: 'Recipe handed down by Mom',
  },
];
