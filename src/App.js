import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './components/home.js';
import About from './components/about.js';
import Contact from './components/contact.js';
import ProjectContainer from './components/projects.js';

import './App.css';


export default class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL} >
        <div>
          <Route exact strict path="/" component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={ProjectContainer} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    )
  }
}
