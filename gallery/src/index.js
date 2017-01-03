import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Gallery from './gallery'
import Alex from './1artist'
import Alice from './2artist'
import Mel from './3artist'
import Greg from './4artist'
import Marina from './5artist'
import Android from './6artist'
import Album from './album'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'


ReactDOM.render((
 <Router history={hashHistory}>
    <Route path="/" component={App}>
    <IndexRoute component={Gallery}/>
    <Route path="/album/:artist" component={Album}/>
    // <Route path="/1" component={Alex}/>
    // <Route path="/2" component={Alice}/>
    // <Route path="/3artist" component={Mel}/>
    // <Route path="/4artist" component={Greg}/>
    // <Route path="/5artist" component={Marina}/>
    // <Route path="/6artist" component={Android}/>
  </Route>
  </Router>

),document.getElementById('root'))
