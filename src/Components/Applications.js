import React, { Component } from 'react'
import{connect} from 'react-redux'

import {getApplications} from '../Redux/Actions/ApplicationDActions'



 class Applications extends Component {
 
constructor(props){
  super(props);
  this.state={
    title:''
  }
}




componentWillMount(){

    //this.props.fetchrequests();
    console.log(this.props);
    
    //if the route is on the path of screen one call this.props.fetchComments

    this.props.getApplications();
    
 
}
    
render() {
    
    const applicationDisplay = this.props.application.map(app=>(
        <div key={app.id}>
        <p>{app.name}</p>
        </div>
    ))

   
    return (
      <div>
        <h1>Welcome Admin: please select an application to administer</h1>
        <button>
         {applicationDisplay}
         </button>
      </div>
    )
  }
}

//maps the state to the props (sort of like creating props from the state)
const mapStateToProps= state =>({

    application:state.application.applications
})

export default connect(mapStateToProps,{getApplications})(Applications);