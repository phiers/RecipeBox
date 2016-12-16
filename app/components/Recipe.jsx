import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Recipe extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h4>Prime Rib</h4>
          <button>+</button>
        </div>
        <div className="card-detail">
          <h5>Ingredients:</h5>
          <div className="ingredient-list">
            <p className="ingredients"><span className="qnty">some qnty</span><span className="ingredient">some ingredient</span></p>
            <p className="ingredients"><span className="qnty">some qnty</span><span className="ingredient">some ingredient</span></p>
            <p className="ingredients"><span className="qnty">some qnty</span><span className="ingredient">some ingredient</span></p>
            <p className="ingredients"><span className="qnty">some qnty</span><span className="ingredient">some ingredient</span></p>
            <p className="ingredients"><span className="qnty">some qnty</span><span className="ingredient">some ingredient</span></p>
            <p className="ingredients"><span className="qnty">some qnty</span><span className="ingredient">some ingredient</span></p>
          </div>
          <div className="small button-group">
            <Link to="/edit/123" className="button success">Edit</Link>
            <a className="button alert">Delete</a>
          </div>
        </div>
      </div>
    );
  }
}
