import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router'
import art from './data'


class App extends Component {
  constructor (){
    super()
    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
        <ul id="navBar">
          <li><Link to="/1artist" activeStyle={{ color: 'blue' }}>Alex Gray</Link></li>
          <li><Link to="/2artist" activeStyle={{ color: 'blue' }}>Alice Willinger</Link></li>
          <li><Link to="/3artist" activeStyle={{ color: 'blue' }}>Mel Odom</Link></li>
          <li><Link to="/4artist" activeStyle={{ color: 'blue' }}>Gregory Euclide</Link></li>
          <li><Link to="/5artist" activeStyle={{ color: 'blue' }}>Marina Abramovic</Link></li>
          <li><Link to="/6artist" activeStyle={{ color: 'blue' }}>Android Jones</Link></li>
        </ul>
          {this.props.children}
      </div>
    );
  }

}

export default App;
