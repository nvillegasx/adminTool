import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import image from "../../Images/mountain.jpeg";
import "./LoginPage.css";

import {passUsername} from "../../Redux/Actions/UserActions";
import{connect} from 'react-redux';

 class LoginPage extends Component {

  constructor(props){
    super(props);

    this.state={
      username:"",
      password:""
    }
    
  }

  updateUsername =(e)=>{
    this.setState({username:e.target.value})
  }

  
  updatePassword =(e)=>{
    this.setState({password:e.target.value})
  }

  //****  Reminder :was editing this portion for the redux //
  changeUsername=(e)=>{
      this.props.passUsername({username:e.target.value})

      // would set the state back to an empty string
      // this.setState({username:''})
  }

  render() {
    return (
      <div className="container">
        <div>
          <img src ={image} alt="" className="logo"/>
          <form className="loginForm">
            <label>
              <input type="text" className="form-control" name="username" placeholder="Enter Username" onChange={this.changeUsername}/>
            </label>
            <br/>
            <label>
              <input type="text" className="form-control" name="password" placeholder="Enter Password" onChange={this.updatePassword} />
            </label>
            <br/>
            {/* <input type="submit" value= "submit"/> */}
          </form>  
       
          <Link to ='/screenOne'>
            <button className="btn btn-secondary">Login</button>
          </Link>
          
          {/* usig the prop of the passed state for testing of passing state */}
          <h2><br/>{this.props.passedState}</h2>

        </div> 
      </div>
    )
  }
}

// the component recieves changeUsername as a prop 
// and automatically dispatches the action when called 
export default connect(null,{passUsername})(LoginPage);