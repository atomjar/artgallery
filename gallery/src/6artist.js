import React, { Component } from 'react'
import art from './data'

class Android extends Component{
 render(){
   return (
     <div>
        <h1>Android Jones</h1>
        <ul>
            <li><img src={art[20].url}/>
                <p>{art[20].desc}</p>
            </li>
            <li><img src={art[21].url}/>
                <p>{art[21].desc}</p>
            </li>
            <li><img src={art[22].url}/>
                <p>{art[22].desc}</p>
            </li>
            <li><img src={art[23].url}/>
                <p>{art[23].desc}</p>
            </li>
        </ul>
     </div>
   )
 }
}

export default Android
