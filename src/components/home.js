import React, { Component } from 'react';

import Contact from './contact';
import ProjectContainer from './projects';
import About from './about';

import './home.css'


const MainTitle = () => <p className="main-title" >Jennifer Dixon</p>;

const IntroBlurb = () => (
  <h5 className="intro-blurb">
    Full-stack software engineer with a non-traditional background
  </h5>
);

const NavBar = () => (
  <nav id="nav-menu justify-content-center">
    <ul className="nav justify-content-center" id="nav-bar">
      <li className="nav-item justify-content-center" id="proj">
        <a href="#projects">Projects</a>
      </li>
      <li className="nav-item" id="abt">
        <a href="#about">About</a>
      </li>
      <li className="nav-item" id="cont">
        <a href="#contact">Contact</a>
      </li>
    </ul>
  </nav>
)

class HomePage extends Component {
  render() {
    return (
      <div className="home-div">

        <MainTitle />
        <IntroBlurb />
        <NavBar />
        <ProjectContainer />
        <br />
        <About />
        <br />
        <Contact />


      </div>
    )
  }
};


export default HomePage;

