import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const sidebar2 = () => {
return (
    <div class="sidenav">
        <Link to="/screenOne" >
            <li className="nav-link" >
            screenOne
            </li>
        </Link>
        <Link to="/testScreen" >
            <li className="nav-link">
            TestScreen
            </li>
        </Link> 
        <Link to="/" >
            <li className="nav-link">
            Log Out
            </li>
        </Link> 
        <a href="#">Contact</a>
    </div>
)}

export default sidebar2