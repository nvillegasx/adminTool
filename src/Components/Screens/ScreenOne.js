import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types' 

import Posts from '../Posts'
import  MainMenu from '../MainMenu';


import './sharedScreen.css';

//import {withRouter} from 'react-router'

class ScreenOne extends Component {

  PropTypes={
    //match: PropTypes.object.isRequired,
      location: PropTypes.object.isRequired,
   // history: PropTypes.object.isRequired,
  };

 
  render() {

    //const {match,location,history} = this.props;
    const {pathname}=this.props.location;

    return (
      //using an inline style example
      <div className="Body">
        <header className="App-header">
          <MainMenu/>
        </header>
        <h1 style={screenOneStyle}>
          screenOne
        </h1>
        <p> username: {this.props.user}</p>
        {/*using css stylesheet*/}
        <div className="spacingLocation">
          {pathname}
        </div>
        <Posts/>
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
