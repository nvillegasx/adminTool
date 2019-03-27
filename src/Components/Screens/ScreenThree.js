import React, { Component } from 'react'
import {connect} from 'react-redux'
import Posts from '../Posts'
import  MainMenu from '../MainMenu';

 class screenThree extends Component {
  render() {
    return (
      <div className="titleSpacing">
        <header  className="App-header">
         <MainMenu/>
        </header>
        <h1 className="jumbotron">screenThree</h1>
        <Posts/>
      </div>
    )
  }
}

export default connect (null)(screenThree)