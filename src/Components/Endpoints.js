import React, { Component } from 'react'
import{connect} from 'react-redux'

import {fetchRequestType} from '../Redux/Actions/EndpointActions'



 class Endpoints extends Component {
 
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
    if(this.props.pathScreenOne){
    this.props.fetchRequestType();
    }
 
}
    
render() {
    
    const displayEndpoints = this.props.requests.map(request=>(
        <div key={request.id}>
        <p>{request.endpoint}</p>
        {request.routes.map(route =>(
          <div>
            <p>{route.requestType}</p>
            </div>
          ))
          
        }     
        </div>
    ))

   
    return (
      <div>
        <h1>requests</h1>
        {displayEndpoints}
      </div>
    )
  }
}

//maps the state to the props (sort of like creating props from the state)
const mapStateToProps= state =>({

    requests:state.requests.types
})

export default connect(mapStateToProps,{fetchRequestType})(Endpoints);
