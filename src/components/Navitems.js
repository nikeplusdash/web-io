import React, { Component } from 'react';
//import './App.css';
import './Navbar.css'
const logo = require('../assets/logo.png')

class Navitems extends Component {
  render() {
    return (
      <span>
        {
          this.props.children
        }
      </span>
    );
  }
}

export default Navitems;