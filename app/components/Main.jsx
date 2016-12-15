import React, { PropTypes } from 'react';
import TitleBar from 'TitleBar'; // eslint-disable-line


const Main = props =>
   (
     <div>
       <TitleBar />
       <div className="container">
         {props.children}
       </div>
     </div>
  );

module.exports = Main;

Main.propTypes = {
  children: PropTypes.node,
};
