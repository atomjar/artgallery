import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router'
import art from './data'


class Gallery extends Component {
  constructor (){
    super()
    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Artist Gallery</h1>
        </div>
          <ul id="galleryUL">
              <div>
              {art.map((album, index) => {
                return (
                  <li><Link to={`/album/${index+1}`} activeStyle={{ color: 'blue' }}>
                      <img className="home" src={album.work[0].url}/>
                      {album.artist}
                    </Link></li>)
              })}
              </div>
          </ul>
          {this.props.children}
      </div>
    );
  }

}

export default Gallery
