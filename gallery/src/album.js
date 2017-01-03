import React, { Component } from 'react'
import art from './data'

class Album extends Component{
 render(){
   var index = parseInt(this.props.params.artist) - 1
   var album = art[index]
   return (
     <div>
        <h1>{album.artist}</h1>
        <ul>
        {album.work.map(piece => {
          <li><img src={piece.url}/>
              <p>{piece.desc}</p>
          </li>
        })}
        </ul>
     </div>
   )
 }
}

export default Album
