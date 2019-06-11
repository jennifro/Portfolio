import React, { Component } from 'react';

import BloomSample from './bloom-sample.gif';
import FeelingPrezSample from './feeling-prez-sample.gif';

import './projects.css';


export default class ProjectContainer extends Component {
  render() {
    return (
      <div id="projects">
      <h4 className="title">Projects</h4>
        <div className="project-container" id="discover-bloom">
          <img src={BloomSample} alt="Sample of language-learning web app, Bloom, programmed by Jennifer Dixon." />
          <a href="https://app.discoverbloom.com/">
            Bloom, an indigenous language-learning web app currently offering one level with four chapters in Tsalagi (Cherokee).
          </a>
        </div>
        <div className="project-container" id='feelin-presidential' >
          <img src={FeelingPrezSample} alt="Sample of natural language processing project created by Jennifer Dixon." />
          <a href="https://feeling-prez.herokuapp.com/">
            Feeling Presidential, a sentiment analysis project with
            Python's Natural Language Toolkit (NLTK), Flask & d3.js
          </a>
        </div>
      </div>
    )
  }
};
