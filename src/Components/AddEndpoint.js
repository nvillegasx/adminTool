import React, { Component } from 'react'
import './AddEndpoint.css'

class AddEndpoint extends Component {
    constructor(props){
        super(props);
        this.mybodyParamTable = React.createRef();
        this.state ={
            bodyParamRows: [],
            pathParamRows: [],
            numBodyParam: 0,
            numPathParam: 0
        }

    }



    addBodyParamRow=()=>{
        let newName = "b" + this.state.numBodyParam
        var  row = this.state.bodyParamRows
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
                        <input type="radio" name={newName} value="yes"></input>
                        Yes
                    </div>
                    <div className="col-sm">
                        <input type="radio" name={newName} value="no"></input>
                        No
                    </div>
                </div>
            </div>
            <div className="col-sm">
                <input type="text"></input>
            </div>
        </div>
        </div>

        let newNumParams = this.state.numBodyParam
        newNumParams = newNumParams + 1
        this.setState({numBodyParam: newNumParams})

        row.push(newrow)
        this.setState({ bodyParamRows: row})
    }
    addRow=()=>{
        var  row = this.state.pathParamRows
        let newName = "p" + this.state.numPathParam
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
                        <input type="radio" name={newName} value="yes"></input>
                        Yes
                    </div>
                    <div className="col-sm">
                        <input type="radio" name={newName} value="no"></input>
                        No
                    </div>
                </div>
            </div>
            <div className="col-sm">
                <input type="text"></input>
            </div>
        </div>
        </div>

        let newNumParams = this.state.numPathParam
        newNumParams = newNumParams + 1
        this.setState({numPathParam: newNumParams})

        row.push(newrow)
        this.setState({ pathParamRows: row})
    }
  render() {
    return (
      <div className="w-50 p-3">
        <form>
            <div className="form-group">
                <label>Name of endpoint</label>
                <input type="text" className="form-control"></input>
            </div>
            <div className="form-group">
                <label>Endpoint Description</label>
                <textarea className="form-control"></textarea>
            </div>
            <div className="form-group">
                <label>Endpoint Type</label>
                <select className="form-control">
                    <option disabled selected value> -- select an option -- </option>
                    <option>GET</option>
                    <option>POST</option>
                    <option>PUT</option>
                    <option>DELETE</option>
                </select>
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
                </div>
            </div>
            <div>
                <div>
                    {this.state.bodyParamRows.map(r =>(
                        <div>
                            <div>{r}</div>
                        </div>
                    ))}
                </div>
                <button onClick={this.addBodyParamRow}>Add</button>
            </div>

            {/* path Parameter rows */}
            <div className="form-group">
                <label>Path Parameters</label>
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
                </div>
            </div>
        <div>
            <div>
                {this.state.pathParamRows.map(r =>(
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
