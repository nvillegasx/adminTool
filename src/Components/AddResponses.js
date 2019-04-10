import React, { Component } from 'react'
import './AddResponses.css'

class AddEndpoint extends Component {
    constructor(props){
        super(props);
        this.state ={
            bodyParamRows: [], //this has to be a [[]]
            responsesRow: [],
            // bodyParams:[], // this also has to be a [[]]
            // responses:[],
            numBodyParam: [], // element will point to number of body params (int)
            numResponses: 1, // keeps track of the number of responses
            endpointData: {}
        }


    }

    // could pass in the response idx
    addBodyParamRow=(responseIdx)=>{

        
        let numOfBodyParam;
        let row;
        if( this.state.numBodyParam[responseIdx] != undefined)
        {
            numOfBodyParam = this.state.numBodyParam[responseIdx]
            row = this.state.bodyParamRows[responseIdx]
        }
        else
        {
            numOfBodyParam = 0
            row = []
        }
        console.log( numOfBodyParam)
        console.log( row)
        console.log(this.state.bodyParamRows)

        let newrow =
            <div className="form-group">
                <div className="row">
                    <div className="col-sm">
                        <input type="text"></input>
                    </div>
                    <div className="col-sm">
                        <input type="text"></input>
                    </div>
                    <div className="col-sm">
                        <div className="row">
                            <div className="col-sm">
                                <input type="radio" value="yes" ></input>
                                Yes
                            </div>
                            <div className="col-sm">
                                <input type="radio" value="no"></input>
                                No
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <input type="text" ></input>
                    </div>

                </div>
            </div>

        let newNumParams = this.state.numBodyParam
        newNumParams[responseIdx] = numOfBodyParam + 1
        this.setState({numBodyParam: newNumParams})

        row.push(newrow)
        let newState = this.state.bodyParamRows
        newState[responseIdx] = row
        this.setState({ bodyParamRows: newState})
    }


    addRow=()=>{

        var  row = this.state.responsesRow
        // let newName = "p" + this.state.numResponses
        let responseIdx = this.state.numResponses
        let newrow =
        <div className="responseBox">
            <form>
                <div className="form-group">
                    <label>Response Code</label>
                    <input type="text" className="form-control" ></input>
                </div>
                <div className="form-group">
                    <label>Response Status</label>
                    <input className="form-control" ></input>
                </div>
                            
            </form>
                {/* bodyParamField */}
                <div className="form-group">
                    <label>Body Parameters</label>
                    <div className="row">
                        <div className="col-sm">
                            <p>Name</p>
                        </div>
                        <div className="col-sm">
                            Type
                        </div>
                        <div className="col-sm">
                            Required
                        </div>
                        <div className="col-sm">
                            Description
                        </div>
                        <div className="col-sm">

                        </div>
                    </div>
                </div>
                <div>
                    {console.log(this.state.bodyParamRows[responseIdx])}
                    <div>
                        {
                            this.state.bodyParamRows[responseIdx] != undefined ?
                            this.state.bodyParamRows[responseIdx].map(r =>(
                            <div>
                                <div>{r}</div>
                            </div>
                            ))
                            :
                            null
                        }
                    </div>
                    <button onClick={()=>this.addBodyParamRow(responseIdx)}>Add</button>
                </div>
            <div className="form-group">
                <label>Example Response</label>
                <div className="row">
                    <input type="file" accept="image/*"></input>
                </div>
            </div>
        </div>
        // increase the number of responses
        let newNumParams = this.state.numResponses
        newNumParams = newNumParams + 1
        this.setState({numResponses: newNumParams})

    
        row.push(newrow)
        this.setState({ responsesRow: row})
    }


  render() {

    
    return (
      <div className="w-50 p-3">
        <div className="responseBox">
        <form>
            <div className="form-group">
                <label>Response Code</label>
                <input type="text" className="form-control" ></input>
            </div>
            <div className="form-group">
                <label>Response Status</label>
                <input className="form-control" ></input>
            </div>
                           
        </form>
            {/* bodyParamField */}
            <div className="form-group">
                <label>Body Parameters</label>
                <div className="row">
                    <div className="col-sm">
                        <p>Name</p>
                    </div>
                    <div className="col-sm">
                        Type
                    </div>
                    <div className="col-sm">
                        Required
                    </div>
                    <div className="col-sm">
                        Description
                    </div>
                    <div className="col-sm">

                    </div>
                </div>
            </div>
            <div>
                <div>
                {
                            this.state.bodyParamRows[0] != undefined ?
                            this.state.bodyParamRows[0].map(r =>(
                            <div>
                                <div>{r}</div>
                            </div>
                            ))
                            :
                            null
                        }
                </div>
                <button onClick={()=>this.addBodyParamRow(0)}>Add</button>
            </div>
        </div>
        <div>
            <div>
                {this.state.responsesRow.map(r =>(
                    <div>
                        <div>{r}</div>
                    </div>
                    ))}
            </div>
            <button onClick={this.addRow}>Add</button>
        </div>
      </div>
    )
  }
}

export default AddEndpoint
