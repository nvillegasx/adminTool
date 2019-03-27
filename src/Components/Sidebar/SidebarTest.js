import React, { Component } from 'react';
import Sidebar from "react-sidebar";
//import MainMenu from "../MainMenu";
import LoginPage from "../Login/LoginPage";

//import ScreenOne from "../Screens/ScreenOne";

import "./SidebarTest.css";

import {Link} from 'react-router-dom';


//For styling in react there are no - so for font-size it should be fontSize camel case
// const styleTest={
//   backgroundColor:'#282c34'
// };

const noDecoration={
  textDecoration:'none',

};




class SidebarTest extends Component {

    constructor(props){
        super(props);
        this.state={
            sidebarOpen:true,
            //test for passing the state
            passingState:"This is the state passed from sidbarTest.js to the login.js component"
        };
    }


// Dont really need this method or the state of sidebarOpen if the sidebar is not going to change
    onSetSidebarOpen = (open) =>{

      this.setState({sidebarOpen:open});

    }

  render() {
    return (

        <div>
      
           <Sidebar
           //passes the state of passedState as a prop to loginPage
             children = { <LoginPage passedState={this.state.passingState}/>}
              sidebar={
        <div className="test">
          <ul className="navbar-nav">
            <Link to="/screenOne" style={noDecoration}>
              <li className="nav-link" >
                screenOne
              </li>
            </Link>
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
              </div>}
              open= {this.state.sidebarOpen}
              onSetOpen={this.onSetSidebarOpen}
             //  Docked determines whether the sidebar should always be visible by setting equal to true the button
             //  will no longer be able to toggle the sidebar 
              docked={true}
              styles={{sidebar: {background:'#282c34', width:200} }}
           >
             {/* <button className="open" onClick={()=> this.onSetSidebarOpen(true)}>
             open sidebar
             </button> */}
   
             
           </Sidebar>
   
          
   
         </div>
    )
  }
}


export default SidebarTest;