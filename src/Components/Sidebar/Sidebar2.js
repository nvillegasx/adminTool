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
        <Link to="/addendpoint" >
            <li className="nav-link">
            addendpoint
            </li>
        </Link> 
        <Link to="/addresponses" >
            <li className="nav-link">
            Responses
            </li>
        </Link> 
        <a href="#">Contact</a>
    </div>
)}

export default sidebar2