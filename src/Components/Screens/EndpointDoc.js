import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import MainMenu from "../MainMenu";
import Sidebar from "react-sidebar";
//import Posts from "../Posts";
import Endpoints from "../Endpoints"

class EndpointDoc extends Component {


 
    constructor(props) {
      super(props);
      this.state = {
  
      };
    }
  


  render() {

    const {pathname} = this.props.location;

    return (
      <div>
         <div className="Body">
        <Sidebar
          //passes the state of passedState as a prop to loginPage
          children={
              <div>
                <header className="App-header">
                 <MainMenu />
                 
                </header>
                
              
                <h1>username: {this.props.user}</h1>
              </div>
          }
          sidebar={
              <div className="test">
                <Endpoints pathScreenOne={pathname} />
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
      </div>
    )
  }
}

const mapStateToProps = state => ({
  //this will give errors if there is no username entered
  //the reason is because the dispatch is not defined
  //in the state until the user enters react dev tools
  user: state.user.account.username
});



export default connect(mapStateToProps)(EndpointDoc);