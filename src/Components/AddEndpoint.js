import React, { Component } from 'react'
import './AddEndpoint.css'

class AddEndpoint extends Component {
    constructor(props){
        super(props);
        this.mybodyParamTable = React.createRef();
        this.state ={
            bodyParamRows: []
        }

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
                                <input type="radio" name="bodyRequired" value="yes"></input>
                                Yes
                            </div>
                            <div className="col-sm">
                                <input type="radio" name="bodyRequired" value="no"></input>
                                No
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <input type="text"></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm"></div>
                    <div className="col-sm"><button >Add Parameter</button></div>
                    <div className="col-sm"></div>
                </div>
            </div>
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
                                <input type="radio" name="pathRequired" value="yes"></input>
                                Yes
                            </div>
                            <div className="col-sm">
                                <input type="radio" name="pathRequired" value="no"></input>
                                No
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <input type="text"></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm"></div>
                    <div className="col-sm"><button>Add Parameter</button></div>
                    <div className="col-sm"></div>
                </div>
            </div>
        </form>
      </div>
    )
  }
}

export default AddEndpoint
