import React, { Component } from 'react'
import art from './data'

class Greg extends Component{
 render(){
   return (
     <div>
        <h1>Gregory Euclide</h1>
        <ul>
            <li><img src={art[12].url}/>
                <p>{art[12].desc}</p>
            </li>
            <li><img src={art[15].url}/>
                <p>{art[15].desc}</p>
            </li>
            <li><img src={art[14].url}/>
                <p>{art[14].desc}</p>
            </li>

        </ul>
     </div>
   )
 }
}

export default Greg
