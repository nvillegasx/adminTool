import React, { Component } from 'react'
import{connect} from 'react-redux'
import {getEndpoints} from '../Redux/Actions/EndpointActions'
import './DisplayEndpoints.css'

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



  render() {
    const displayEPs= this.props.endpoints.map(ep =>(
      // the key needs to be unique fix this
      <div key={ep.dateCreated} className="epData">
        <h1>Endpoint: {ep.endpoint}</h1>
        {console.log(ep)}
        {ep.routes.map(route =>(
          <div>
            <h4>Route:</h4>
            <p>Type: {route.requestType}</p>
            <p>Description: {route.description}</p>

            { route.bodyParams.length != 0 ? 
            <div>
              <h4>Body Params</h4>
              <div className="row">
                    <div className="col-sm">
                      <h5>Name</h5>
                    </div>
                    <div className="col-sm">
                      <h5>Description</h5>
                    </div>
                    <div className="col-sm">
                      <h5>Required </h5>
                    </div>
                </div>
              </div>
              : null
            }
              
            { route.bodyParams !== undefined ? 
              (route.bodyParams.map( path => (

                <div className="row">
                  <div className="col-sm">
                    <div>
                      <p><span className="param">{path.name}</span></p>
                    </div>
                  </div>
                  <div className="col-sm">
                    <p>{path.description}</p>
                  </div>
                  <div className="col-sm">
                    <p>{path.isRequired}</p>
                  </div>
                </div>
              ))
              )
              : null
            }
            { route.pathParams.length != 0 ?
              <div> 
                <h4>Path Params</h4>
                <div className="row">
                  <div className="col-sm">
                    <h5>Name</h5>
                  </div>
                  <div className="col-sm">
                    <h5>Data Type</h5>
                  </div>
                  <div className="col-sm">
                    <h5>Description</h5>
                  </div>
                  <div className="col-sm">
                    <h5>Required </h5>
                  </div>
                </div>
              </div>
              : null
            }
            { route.pathParams !== undefined ? 
              (route.pathParams.map( path => (
                <div className="row">
                  <div className="col-sm">
                    <p><span className="param">{path.name}</span></p>
                  </div>
                  <div className="col-sm">
                    <p><span className="param">{path.dataType}</span></p>
                  </div>
                  <div className="col-sm">
                    <p>{path.description}</p>
                  </div>
                  <div className="col-sm">
                    <p>{path.isRequired}</p>
                  </div>
                </div>
                
              ))
              )
              : null
            }
          </div>
        ))
        }
        <hr></hr>
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
