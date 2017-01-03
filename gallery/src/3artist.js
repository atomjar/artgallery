import React, { Component } from 'react'
import art from './data'

class Mel extends Component{
 render(){
   return (
     <div>
        <h1>Mel Odom</h1>
        <ul>
            <li><img src={art[8].url}/>
                <p>{art[8].desc}</p>
            </li>
            <li><img src={art[9].url}/>
                <p>{art[9].desc}</p>
            </li>
            <li><img src={art[10].url}/>
                <p>{art[10].desc}</p>
            </li>
            <li><img src={art[11].url}/>
                <p>{art[11].desc}</p>
            </li>
        </ul>
     </div>
   )
 }
}

export default Mel
