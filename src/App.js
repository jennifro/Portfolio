import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './components/home.js';


import './App.css';


// To add: <Route path="resume" component={Resume} />
export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage}/>
        </div>
      </Router>
    )
  }
}
