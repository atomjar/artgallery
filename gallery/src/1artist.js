import React, { Component } from 'react'
import art from './data'

class Alex extends Component{
 render(){
   return (
     <div>
        <h1>Alex Gray</h1>
        <ul>
            <li><img src={art[0].url}/>
                <p>{art[0].desc}</p>
            </li>
            <li><img src={art[1].url}/>
                <p>{art[1].desc}</p>
            </li>
            <li><img src={art[2].url}/>
                <p>{art[2].desc}</p>
            </li>
        </ul>
     </div>
   )
 }
}

export default Alex
