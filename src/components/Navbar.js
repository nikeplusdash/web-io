import React, { Component } from 'react';
//import './App.css';
import './Navbar.css';  
import Navitems from './Navitems';
const logo = require('../assets/logo.png')

class Navbar extends Component {
  render() {
    return (
      <div className="nav-bg">
        <img className="logo" src={logo} alt="MITManipal"/>
        <Navitems selected>Academic Details</Navitems>
        <Navitems>Course Details</Navitems>
      </div>
    );
  }
}

export default Navbar;
