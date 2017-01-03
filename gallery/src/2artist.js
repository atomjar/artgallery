import React, { Component } from 'react'
import art from './data'


class Alice extends Component{
 render(){
   return (
     <div>
        <h1>Alice Willinger</h1>
        <ul>
            <li><img src={art[4].url}/>
                <p>{art[4].desc}</p>
            </li>
            <li><img src={art[5].url}/>
                <p>{art[5].desc}</p>
            </li>
            <li><img src={art[6].url}/>
                <p>{art[6].desc}</p>
            </li>
            <li><img src={art[7].url}/>
                <p>{art[7].desc}</p>
            </li>
        </ul>
     </div>
   )
 }
}

export default Alice
