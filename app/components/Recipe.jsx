import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

/* eslint-disable max-len */

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
          <h5>Notes:</h5>
          <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla porttitor accumsan tincidunt. Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
          <hr />
          <div className="small button-group">
            <Link to="/edit/123" className="button success">Edit</Link>
            <a className="button alert">Delete</a>
          </div>
        </div>
      </div>
    );
  }
}
