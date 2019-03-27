import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'; 
//import {withRouter} from 'react-router';
import  MainMenu from '../MainMenu';
import Posts from '../Posts';
//import the css files
import '../../App.css';
import './sharedScreen.css';

class ScreenTwo extends Component {

  PropTypes={

   // match: PropTypes.object.isRequired,
      location: PropTypes.object.isRequired,
   // history: PropTypes.object.isRequired,


  };
  
  render() {

    //const {match,location,history} = this.props;
    //gets the pathname of the current screen 
    const {pathname} = this.props.location;

    return (
      //to use css style must use className 
      <div className = "titleSpacing">
        <header  className="App-header">
         <MainMenu/>
        </header>
        <h1 className="jumbotron">
          screenTwo
        </h1>
        <p> username: {this.props.user}</p>
        <div className="spacingLocation">
          This is the path name of the screen {pathname}
        </div>
        {/* passes the prop pathname as pathScreenOne to the Posts component */}
        <Posts pathScreenOne={pathname}/>
      </div>
    )
  }
}


const mapStateToProps= state =>({

  //this will give errors if there is no username entered
  //the reason is because the dispatch is not defined
  //in the state until the user enters react dev tools

 user:state.user.account.username
})


export default connect(mapStateToProps)(ScreenTwo)