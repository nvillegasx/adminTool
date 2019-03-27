import React, { Component } from 'react';
//import Sidebar from "react-sidebar";
import MainMenu from "../MainMenu";

//import MainMenu from '../MainMenu';
import "./sharedScreen.css"
import "../Login/LoginPage"
//import LoginPage from '../Login/LoginPage';

import  SidebarTest from '../Sidebar/SidebarTest';

 class TestScreen extends Component {

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
    return (
      <div>
     <header className="App-header">
          <MainMenu/>
        </header>
     

      <SidebarTest/>

    
        {/* <Sidebar
          children = { <LoginPage/>}
           sidebar={<div>
           <h1>content1</h1>
           <h1>content2</h1>
           <h1>content3</h1>
           <h1>content4</h1>
           </div>}
           open= {this.state.sidebarOpen}
           onSetOpen={this.onSetSidebarOpen}
          //  Docked determines whether the sidebar should always be visible by setting equal to true the button
          //  will no longer be able to toggle the sidebar 
           docked={true}
           styles={{sidebar: {background:'#282c34', width:200} }}
        >
          
          
        {/* </Sidebar>

        */} 

      </div>
    );
  }
}

export default TestScreen;