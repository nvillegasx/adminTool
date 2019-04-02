import React, { Component } from 'react'
import{connect} from 'react-redux'
import {getEndpoints} from '../Redux/Actions/EndpointActions'

class DisplayEndpoints extends Component {
    constructor(props){
        super(props);
        this.state={
            // endpoints: []
        }
    }

    componentDidMount = () => {
        this.props.getEndpoints()
    }
    componentWillUpdate =() =>{
        {console.log(this.state.endpoints)}

    }

  render() {
    return (
      <div>
        {/* {this.props.getEndpoints()} */}
        {/* { () => this.getEPs()} */}
        {console.log(this.state.endpoints)}
      </div>
    )
  }
}

const mapStateToProps = state =>({
    endpoints: state.endpoint.endpoints
})

export default connect(mapStateToProps, {getEndpoints})(DisplayEndpoints);
