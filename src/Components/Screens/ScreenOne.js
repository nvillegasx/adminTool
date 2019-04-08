import React, { Component } from "react";
import { connect } from "react-redux";

import Posts from "../Posts";
import MainMenu from "../MainMenu";

import Sidebar from "react-sidebar";
import "./sharedScreen.css";

import { Link } from "react-router-dom";
//import {withRouter} from 'react-router'

class ScreenOne extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  

  
  render() {

    // const testing= this.props.user

    return (
      
      //using an inline style example
      <div className="Body">
        <Sidebar
          //passes the state of passedState as a prop to loginPage
          children={
              <div>
                <header className="App-header">
                 <MainMenu />
                 
                </header>
                <Posts />

                {/* {sessionStorage.setItem("Username",testing)} */}

                <h1>username: {this.props.user}</h1>
              </div>
          }
          sidebar={
              <div className="test">
                <ul className="navbar-nav">
                  <Link to="/screenOne">
                    <li className="nav-link">screenOne</li>
                  </Link>
                  <Link to="/testScreen">
                    <li className="nav-link">TestScreen</li>
                  </Link>
                  <Link to="/">
                    <li className="nav-link">Log Out</li>
                  </Link>
                </ul>
              </div>
            }
          //  Docked determines whether the sidebar should always be visible by setting equal to true the button
          //  will no longer be able to toggle the sidebar
          docked={true}
          transitions={false}
          styles={{ sidebar: { background: "#282c34", width: 200 } }}
        >
          {/* <button className="open" onClick={()=> this.onSetSidebarOpen(true)}>
             open sidebar
             </button> */}
        </Sidebar>
      </div>
    );
  }
}

//style
// const screenOneStyle={
//   paddingTop:'50px'
// };

const mapStateToProps = state => ({
  //this will give errors if there is no username entered
  //the reason is because the dispatch is not defined
  //in the state until the user enters react dev tools
  user: state.user.account.username
});

export default connect(mapStateToProps)(ScreenOne);
