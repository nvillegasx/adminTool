import React, { Component } from 'react'
import{connect} from 'react-redux'

import {fetchRequestType} from '../Redux/Actions/EndpointActions'

import './DisplayEndpoints.css'

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
        {/* <p>{request.endpoint}</p> */}
        {request.routes.map(route =>(
          <div key={route.id}>
          {/* <button className="btn btn-success btn-sm"> {route.requestType} </button>
            <button className="btn btn-secondary btn-sm"> {request.endpoint} - {route.id} </button> */}  

            <a href={"#"+route.id}>
            <button className="btn btn-secondary btn-sm button-css"> 
            <span className={"styling small rounded text-centered font-weight-bold "
            //if route.requestType===GET add the class bg-sucess to className
            +(route.requestType==='PUT'?"bg-warning":"")
            +(route.requestType==='GET'?"bg-success ":"bg-primary ")
            }>
            {route.requestType}</span>  {request.endpoint} - {route.id}</button></a>
            </div>
          ))    
        }     
        </div>
    ))
      
   
    return (
      <div>
        <h1>Enpoints</h1>
        {displayEndpoints}
        <br/>
        <div>
        <span>create new endpoint  </span><button className="btn btn-primary rounded-circle ">+</button>
        </div>
      </div>
    )
  }
}

//maps the state to the props (sort of like creating props from the state)
const mapStateToProps= state =>({

    requests:state.requests.types
})

export default connect(mapStateToProps,{fetchRequestType})(Endpoints);
