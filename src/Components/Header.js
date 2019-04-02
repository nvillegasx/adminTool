import React, { Component } from 'react'
import AMR from '../Images/AMRLogo.png'
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="mainHeader">
        <img className="AMRlogo" src={AMR} alt={"AMR logo"}/>
      </div>
    )
  }
}

export default Header;
