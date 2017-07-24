import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import About from './components/about.js';
import ProjectContainer from './components/projects.js';

const MainTitle = () => <h1>'dont texas my california, person'</h1>;

class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar" >
        <MainTitle />
        <ul className="nav-menu" >
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
        </ul>
      </div>
    )
  }
};

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={NavBar}/> 
          <Route path="/about" component={About}/>
          <Route path="/projects" component={ProjectContainer}/>
        </div>
      </Router>
    ) 
  }

}