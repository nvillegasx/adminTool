import React, { Component } from 'react'
import{connect} from 'react-redux'

import {getApplications,passApplicationID} from '../Redux/Actions/ApplicationActions'
//import {Link} from 'react-router-dom'
import history from './history';

 class Applications extends Component {
 
constructor(props){
  super(props);
  this.state={
    appActive:'',
    appsAvailabel: []
  }
}




componentWillMount(){
    //this.props.fetchrequests();
    console.log(this.props);
    //if the route is on the path of screen one call this.props.fetchComments
    this.props.getApplications();
   
}


changeAppActive =(Id)=>{

  //this.setState is asynchronous

  //debbuger will allow you to debug

  //this means that the function will then pass the new changed state and call this.passAppID right away
  this.setState({appActive:Id}, () => { this.passAppID() })
}

passAppID=()=>{
  this.props.passApplicationID(this.state.appActive);
  history.push("/screenOne");
}

render() {
    
    const applicationDisplay = this.props.application.map((app)=>(
        <div key={app.id}>
        {/* <Link to={{
          pathname:"/screenOne",
          state:{appActive:this.state.appActive}
        }}> */}
        <button onClick={() => this.changeAppActive(app.id)}>{app.name}</button>
        {/* </Link> */}
        </div>
    ))
    return (
      <div>
        <h1>Welcome Admin: please select an application to administer</h1>
        {/* {this.appTest(applicationDisplay)} */}
        <p>{this.state.appActive}</p>
         {applicationDisplay}
         
         <h1> {this.props.applicationId}</h1>
      </div>
    )
  }
}



//maps the state to the props (sort of like creating props from the state)
const mapStateToProps= state =>({

    application:state.application.applications,
    applicationId:state.application.applicationId
 
})

export default connect(mapStateToProps,{getApplications,passApplicationID })(Applications);

 