import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types' 

import Posts from '../Posts'
import  MainMenu from '../MainMenu';

import Sidebar from "react-sidebar";
import './sharedScreen.css';
import Sidebar2 from '../Sidebar/Sidebar2'

import {Link} from 'react-router-dom';
//import {withRouter} from 'react-router'

import Header from '../Header';

class ScreenOne extends Component {


  
  constructor(props){
    super(props);
    this.state={};
}
 
  render() {
    return (
      //using an inline style example
      <div className="Body">
        <Header />
        <div className="WorkingArea">
          <div className="Header">
          </div>
          <div className="contentArea">
            <Sidebar2 className="sidebar"></Sidebar2>
            
            <div class="main">
                <Posts/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

//style 
const screenOneStyle={
  paddingTop:'50px'
};

const mapStateToProps= state =>({

  //this will give errors if there is no username entered
  //the reason is because the dispatch is not defined
  //in the state until the user enters react dev tools

//  user:state.user.account.username
 user:"dfasd"
})


export default connect (mapStateToProps)(ScreenOne)
