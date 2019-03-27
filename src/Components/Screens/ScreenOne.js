import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types' 

import Posts from '../Posts'
import  MainMenu from '../MainMenu';

import Sidebar from "react-sidebar";
import './sharedScreen.css';

import {Link} from 'react-router-dom';
//import {withRouter} from 'react-router'

class ScreenOne extends Component {

  PropTypes={
    //match: PropTypes.object.isRequired,
      location: PropTypes.object.isRequired,
   // history: PropTypes.object.isRequired,
  };

  
  constructor(props){
    super(props);
    this.state={
        sidebarOpen:true
    };
}



onSetSidebarOpen = (open) =>{

  this.setState({sidebarOpen:open});

}
 
  render() {

    //const {match,location,history} = this.props;
    const {pathname}=this.props.location;

    return (
      //using an inline style example
      <div className="Body">

<Sidebar
           //passes the state of passedState as a prop to loginPage
             children = { 
          <div>
            <header className="App-header">
              <MainMenu/>
            </header>
            <Posts/>
           </div>
          }
            sidebar={
        <div className="test">
          <ul className="navbar-nav">
            <Link to="/screenOne" >
              <li className="nav-link" >
                screenOne
              </li>
            </Link>
            <Link to="/testScreen" >
              <li className="nav-link">
                TestScreen
              </li>
            </Link> 
            <Link to="/" >
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
              transitions={false}
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

//style 
const screenOneStyle={
  paddingTop:'50px'
};

const mapStateToProps= state =>({

  //this will give errors if there is no username entered
  //the reason is because the dispatch is not defined
  //in the state until the user enters react dev tools

 user:state.user.account.username
})


export default connect (mapStateToProps)(ScreenOne)
