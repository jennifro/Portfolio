import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import About from './components/about.js';
import Contact from './components/contact.js';
import ProjectContainer from './components/projects.js';

import './App.css';

const MainTitle = () => <h1 className="main-title">Jennifer Dixon</h1>;

const IntroBlurb = () => (
  <h6 className="intro-blurb">
    I'm a software engineer in the SF Bay Area from a non-traditional, working-class background.
  </h6>
);


class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false
    }

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })
  }

  render() {
    return (
      <div className="home-div">

        <nav id="nav-menu justify-content-center">
          <ul className="nav justify-content-center" id="nav-bar">
            <li className="nav-item" id="1"><a className="nav-link" href="/projects">Projects</a></li>
    	      <li className="nav-item" id="2"><a className="nav-link" href="/about">About</a></li>
            <li className="nav-item" id="4" onClick={this.toggleModal} >
              <a className="nav-link" href="/contact">Contact</a>
            </li>
        	</ul>
        </nav>

        <MainTitle />
        <IntroBlurb />

      </div>
    )
  }
};


// To add: <Route path="resume" component={Resume} />
export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage}/>
          <Route path="/about" component={About}/>
          <Route path="/projects" component={ProjectContainer}/>
          <Route path="/contact" component={Contact} />
          <Route path="/discover-bloom" component={() => window.location = 'https://discoverbloom.com/learn'} />
        </div>
      </Router>
    )
  }
}


// <footer className="fixed-bottom" id="footer-contact-info">
//    <ul className="nav justify-content-end" id="contact">
//        <li className="nav-item"><a className="nav-link" href="/mailto:jen.dxon@gmail.com">email</a></li>
//        <li className="nav-item"><a className="nav-link" href="/https://github.com/jennifro">github.com/jennifro</a></li>
//    </ul>
// </footer>