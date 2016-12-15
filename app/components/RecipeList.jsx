import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class RecipeList extends Component {
  render() {
    return (
      <div>
        <p>LIST route</p>
        <Link to="/create">ADD</Link>
      </div>
    );
  }
}
