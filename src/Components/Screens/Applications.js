import React, { Component } from 'react'
import axios from "axios"


class Applications extends Component {
    constructor(props){
        super(props);
        this.state={
          apps:[]
        }
    }
    componentDidMount(){
        this.getApps();
    }

    // {params: { type: 'allApplications' }}

    getApps = () => {
        const params = {
            type: 'allApplications'
        }
        axios.get('https://integratedservices.amr.net/msat/api/v1/applications', {params} )
        .then((response) => {
            this.setState({apps: response.data.applications})
        })
    }

    render() {
        const apps = this.state.apps.map( app => (
            <div key={app.id}>
            <p>{app.name}</p>
            {console.log(app)}
            </div>
        ))
        

    return (
      <div>
        <h1>Applications</h1>
        { apps }
      </div>
    )
  }
}

export default Applications;
