import React, { Component } from 'react';

import './projects.css';


export default class ProjectContainer extends Component {
  render() {
    return (
      <div id="projects">
      <h4 className="title">Projects</h4>
        <div className="project-container" id="discover-bloom">
          <a href="https://app.discoverbloom.com/">
            Bloom, an indigenous language-learning web app currently offering one level with four chapters in Tsalagi (Cherokee).
          </a>
        </div>
        <div className="project-container" id='feelin-presidential' >
          <a href="https://feeling-prez.herokuapp.com/">
            Feeling Presidential, a sentiment analysis project with
            Python's Natural Language Toolkit (NLTK), Flask & d3.js
          </a>
        </div>
      </div>
    )
  }
};
