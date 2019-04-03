import React, { Component } from 'react';
import MainMenu from '../MainMenu';
import Applications from '../Applications'

 class AppSelection extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
        <MainMenu/>
        </header>
        <Applications/>
      </div>
    )
  }
}



export default AppSelection;