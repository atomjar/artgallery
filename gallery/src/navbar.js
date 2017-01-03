import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router'
import art from './data'

class NavBar extends Component {
  constructor (){
    super()
    this.state = {
    }
  }

  render() {
    return (
        </div>
          <ul>
              <li><Link to="/1artist" activeStyle={{ color: 'red' }}>Alex Gray</Link></li>
              <li><Link to="/2artist" activeStyle={{ color: 'red' }}>Alice Willinger</Link></li>
              <li><Link to="/3artist" activeStyle={{ color: 'red' }}>Mel Odom</Link></li>
              <li><Link to="/4artist" activeStyle={{ color: 'red' }}>Gregory Euclide</Link></li>
              <li><Link to="/5artist" activeStyle={{ color: 'red' }}>Marina Abramovic</Link></li>
              <li><Link to="/6artist" activeStyle={{ color: 'red' }}>Android Jones</Link></li>
          </ul>
          {this.props.children}
      </div>
    );
  }

}

export default NavBar
