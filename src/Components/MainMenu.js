import React from 'react';
import {Link} from 'react-router-dom';


//For styling in react there are no - so for font-size it should be fontSize camel case
const styleTest={
  backgroundColor:'#282c34'
};

const noDecoration={
  textDecoration:'none',

};

//stateless dummy component
const MainMenu = () => {
    return (
      <div>
        <nav className= "navbar navbar-expand-sm  navbar-dark fixed-top" style={styleTest}>
          <ul className="navbar-nav">
              <li className="nav-link ">
            <Link to="/enpointDoc">
                <button className="btn btn-secondary ">
                  Endpoint Documentation
                </button>
            </Link>
              </li>
              <li className="nav-link " >
            <Link to="/" >
                <button className="btn btn-danger">Log Out</button>
            </Link> 
              </li>

            
         </ul>
        </nav>   
      </div>
    );
  };

export default MainMenu;