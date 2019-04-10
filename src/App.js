import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './store';
import{BrowserRouter as Router,Route} from 'react-router-dom';

//import Cal from'./Components/Cal';
// import MainMenu from './Components/MainMenu'
import ScreenOne from './Components/Screens/ScreenOne';
import LoginPage from './Components/Login/LoginPage';
import Applications from './Components/Screens/Applications';

//test screen
import TestScreen from './Components/Screens/TestScreen'


import './App.css';
import DisplayEndpoints from './Components/DisplayEndpoints';
import AddEndpoint from './Components/AddEndpoint';
import AddResponses from './Components/AddResponses';


/* This was the header for the navigation bar had to move it to each of the individual screens since
   I do not want the login to contain the routes for each of the screens */

class App extends Component {
  render() {
    return ( 
      <Provider store = {store}>
        <Router >
          <div className="App">

             {/* Setting up the routes */}
            <Route exact path = "/" component= {LoginPage}/>
            <Route exact path = "/testScreen" component={TestScreen}/>
            <Route exact path = "/screenOne" component= {ScreenOne}/>
            <Route exact path = "/applications" component= {Applications}/>
            <Route exact path ="/endpoints" component={DisplayEndpoints} />
            <Route exact path ="/addendpoint" component={AddEndpoint} />
            <Route exact path ="/addresponses" component={AddResponses} />

            
          </div>
        </Router>
      </Provider>
    );
  }
}




export default App;
