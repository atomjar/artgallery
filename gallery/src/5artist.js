import React, { Component } from 'react'
import art from './data'

class Marina extends Component{
 render(){
   return (
     <div>
        <h1>Marina Abramovic</h1>
        <ul>
            <li><img src={art[16].url}/>
                <p>{art[16].desc}</p>
            </li>
            <li><img src={art[17].url}/>
                <p>{art[17].desc}</p>
            </li>
            <li><img src={art[18].url}/>
                <p>{art[18].desc}</p>
            </li>
            <li><img src={art[19].url}/>
                <p>{art[19].desc}</p>
            </li>
        </ul>
     </div>
   )
 }
}

export default Marina
