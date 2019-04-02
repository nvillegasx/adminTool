import React, { Component } from 'react'
import{connect} from 'react-redux'
import {getEndpoints} from '../Redux/Actions/EndpointActions'

class DisplayEndpoints extends Component {
    constructor(props){
        super(props);
        this.state={
          key: 0,
          typeEPs: []
        }
    }

    componentWillMount = () =>{
      this.props.getEndpoints()
  }

  displayBody = (param) =>{
    console.log("Body" + param)
    if( param !== undefined)
    {
      param.map( bodyP => (
        <div>
          <p>{bodyP.name}</p>
          <p>{bodyP.description}</p>
          <p>{bodyP.isRequired}</p>
        </div>
      ))
    }
  }
  displayPath = (pathP) => {
    console.log("Path" + pathP)
    if(pathP !== undefined)
    {
      pathP.map( path => (
        <div>
          <p>{path.language}</p>
          <p>{path.dataType}</p>
          <p>{path.description}</p>
          <p>{path.isRequired}</p>
        </div>
      ))
    }
  }

  render() {
    const displayEPs= this.props.endpoints.map(ep =>(
      // the key needs to be unique fix this
      <div key={ep.dateCreated}>
        <h3>Endpoint: {ep.endpoint}</h3>
        <h4>Routes:</h4>
        {/* <p>App ID: {ep.application_id}</p>
        <p>Date Created: {ep.dateCreated}</p> */}

        {ep.routes.map(route =>(
          <div>
            <p>{route.requestType}</p>
            <p>{route.description}</p>
            <h4>Body Params</h4>
            {/* { this.displayBody(route.bodyParams)} */}
            { route.bodyParams !== undefined ? 
              (route.bodyParams.map( path => (
                <div>
                  <p>{path.language}</p>
                  <p>{path.dataType}</p>
                  <p>{path.description}</p>
                  <p>{path.isRequired}</p>
                </div>
              ))
              )
              : null
            }
            <h4>Path Params:</h4>
            {this.displayPath(route.pathParams)}
            {/* {
              route.pathParms.map( path => (
                <div>
                  <p>{path.language}</p>
                  <p>{path.dataType}</p>
                  <p>{path.description}</p>
                  <p>{path.isRequired}</p>
                </div>
              ))
            } */}
          </div>
        ))
        }
      </div>

  ))

    return (
      <div >
        {displayEPs}
        {console.log(this.props.endpoints)}

      </div>
    )
  }
}

const mapStateToProps = state =>({
    endpoints: state.endpoint.endpoints
})

export default connect(mapStateToProps, {getEndpoints})(DisplayEndpoints);
