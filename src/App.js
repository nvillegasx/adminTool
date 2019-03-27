import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './store';
import{BrowserRouter as Router,Route} from 'react-router-dom';

//import Cal from'./Components/Cal';
//import MainMenu from './Components/MainMenu'
import ScreenOne from './Components/Screens/ScreenOne';
import LoginPage from './Components/Login/LoginPage';

//test screen
import TestScreen from './Components/Screens/TestScreen'


import './App.css';

/* This was the header for the navigation bar had to move it to each of the individual screens since
   I do not want the login to contain the routes for each of the screens */

class App extends Component {
  render() {
    return ( 
      <Provider store = {store}>
        <Router >
          <div className="App">
            {/* 
             note to self: I need to change the name of the MainMenu component
             I should rename it to NavBar.
              <header className="App-header">
                    <MainMenu/>
                </header>   */}
             {/* Setting up the routes */}
            <Route exact path = "/" component= {LoginPage}/>
            <Route exact path = "/testScreen" component={TestScreen}/>
            <Route exact path = "/screenOne" component= {ScreenOne}/>
            
          </div>
        </Router>
      </Provider>
    );
  }
}




export default App;
