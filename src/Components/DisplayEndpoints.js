import React, { Component } from 'react'
import{connect} from 'react-redux'
import {getEndpoints} from '../Redux/Actions/DisplayActions'
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
      <div key={ep.id} className="epData">
        <h1>Endpoint: {ep.endpoint}</h1>
        {console.log(ep)}
        {ep.routes.map(route =>(
          <div key={route.id}>
            
            <h3 id={""+route.id}><span className={"typeDisplay small rounded text-centered font-weight-bold "
            //if route.requestType===GET add the class bg-sucess to className
            +(route.requestType==='PUT'?"bg-warning":"")
            +(route.requestType==='GET'?"bg-success ":"bg-primary ")
            }>
            {route.requestType}</span> Route</h3>
            {/* <p>Type: {route.requestType}</p> */}
            <p>{route.description}</p>




            {/* bodyParams */}
            { route.bodyParams.length !== 0 ? 
            <div >
              <h4>Body Params</h4>
              <div className="row columnLabel">
                    <div className="col-sm">
                      <label>Name</label>
                    </div>
                    <div className="col-sm">
                      <label>Description</label>
                    </div>
                    <div className="col-sm">
                      <label>Required </label>
                    </div>
                </div>
              </div>
              : null
            }
              
            { route.bodyParams !== undefined ? 
              (route.bodyParams.map( path => (
              <div key={path.id}> 
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
                <hr></hr>
               </div> 
              ))
              )
              : null
            }

            {/* pathParams */}
            { route.pathParams.length !== 0 ?
              <div> 
                <h4>Path Params</h4>
                <div className="row columnLabel">
                  <div className="col-sm">
                    <label>Name</label>
                  </div>
                  <div className="col-sm">
                    <label>Data Type</label>
                  </div>
                  <div className="col-sm">
                    <label>Description</label>
                  </div>
                  <div className="col-sm">
                    <label>Required </label>
                  </div>
                </div>
              </div>
              : null
            }
            { route.pathParams !== undefined ? 
              (route.pathParams.map( path => (
                <div key={path.id}> 
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
                <hr></hr>
               </div> 
              ))
              )
              : null
            }



              {/* responses */}
              {/* { route.responses.length !== 0 ? 
            <div>
              <h4>Responses</h4>
              <div className="row">
                    <div className="col-sm">
                      <h5> Field Name</h5>
                    </div>
                    <div className="col-sm">
                      <h5>Field Type</h5>
                    </div>
                    <div className="col-sm">
                      <h5>Description </h5>
                    </div>
                </div>
              </div>
              : null
            } */}
              

             
            { route.responses !== undefined ? 
              (route.responses.map( path => (
            <div key={path.id}>  
                <div>
                      <h4>{path.responseCode} {path.responseStatus} Response</h4>
                </div>
                <br/>

              <div className="responseContainer">
                <div className="columnLabel">
                  <div className="row">
                      <div className="col-sm">
                        <label>Field Name</label>
                      </div>
                      <div className="col-sm">
                        <label>Field Type</label>
                      </div>
                      <div className="col-sm">
                        <label>Description </label>
                      </div>
                    </div>
                </div>

                <div className="row">
                  <div className="col-sm">
                    <div>
                      <p><span className="param">{path.fieldName}</span></p>
                    </div>
                  </div>
                  <div className="col-sm">
                    <p>{path.fieldType}</p>
                  </div>
                    <div className="col-sm">
                      <p>{path.description}</p>
                    </div>
                </div>
              </div>
              <br/>
                
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
      <div className="body">
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
