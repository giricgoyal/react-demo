import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
      console.log('header render');
        return (
            <div className="header container">
              <h1>{this.props.appTitle}</h1>
            </div>
        );
    }
}

export default Header;