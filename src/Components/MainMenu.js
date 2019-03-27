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
            {/* <Link to="/screenOne" style={noDecoration}>
              <li className="nav-link" >
                screenOne
              </li>
            </Link> */}
            <Link to="/testScreen" style={noDecoration}>
              <li className="nav-link">
                TestScreen
              </li>
            </Link> 
            <Link to="/" style={noDecoration}>
              <li className="nav-link">
                Log Out
              </li>
            </Link> 
         </ul>
        </nav>   
      </div>
    );
  };

export default MainMenu;