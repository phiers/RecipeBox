import React from 'react';
import { Link, IndexLink } from 'react-router';

const activeStyle = {
  background: '#e6e6e6',
  color: 'black',
  fontWeight: 'bold',
};

const TitleBar = () => (
  <div className="top-bar" data-responsive-toggle="menu">
    <div className="top-bar-left">
      <p className="menu-text">My Recipes</p>
    </div>
    <ul className="menu">
      <li><IndexLink to="/" activeStyle={activeStyle}>List</IndexLink></li>
      <li><Link to="/create" activeStyle={activeStyle}>Add</Link></li>
    </ul>
    <div className="top-bar-right">
      <p className="menu-text">View source code on
        <a href="https://github.com/phiers/RecipeBox" rel="noopener noreferrer" target="_blank"> Github</a>
      </p>
    </div>
  </div>
);

export default TitleBar;
