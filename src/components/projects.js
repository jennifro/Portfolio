import React, { Component } from 'react';

import BloomSample from './bloom-sample.gif';
import FeelingPrezSample from './feeling-prez-sample.gif';
import DatabayesSample from './databayes.gif';

import './projects.css';


export default class ProjectContainer extends Component {
  render() {
    return (
      <div id="projects">
      <h2 className="title">Projects</h2>
        <div className="project-container" id="discover-bloom">
          <p>
          Bloom: An indigenous language-learning web app currently offering one level with
          four chapters in Tsalagi (Cherokee).
          </p>
          <img src={BloomSample} alt="Sample of language-learning web app, Bloom, programmed by Jennifer Dixon." />
          <a href="https://app.discoverbloom.com/">
            discoverbloom.com/learn
          </a>
        </div>
        <div className="project-container" id='feelin-presidential' >
          <p>Feeling Presidential: A sentiment analysis project with
          Python's Natural Language Toolkit (NLTK), Flask & d3.js.</p>
          <img src={FeelingPrezSample} alt="Sample of natural language processing project created by Jennifer Dixon." />
          <a href="https://feeling-prez.herokuapp.com/">
            feeling-prez.herokuapp.com
          </a>
        </div>
        <div className="project-container" id='databayes'>
          <p>
            Arguements for Cure Violence: A data visualization of the effectiveness of community intervention strategies.
            Team project at Reboot Safety Hackathon in Oakland, CA; it was presented at the Real Future Fair in November 2017.
          </p>
          <img src={DatabayesSample} alt="Sample of data visualization showing the effectiveness of Cure Violence compared to law enforcement in Chicago over a time period." />
          <a href="https://github.com/jennifro/databayes">
            github.com/jennifro/databayes
          </a>
        </div>
      </div>
    )
  }
};
