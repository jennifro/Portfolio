import React, { Component } from 'react';

export default class ProjectContainer extends Component {
  render() {
    return (
      <div id="projects">
        <div id="discover-bloom">
          <a href="https://app.discoverbloom.com/">
            Bloom, an indigenous language-learning web app currently offering one level with four chapters in Tsalagi (Cherokee).
          </a>
        </div>
        <div id='feelin-presidential' >
          <a href="https://feeling-prez.herokuapp.com/">
            Feeling Presidential, a sentiment analysis project with
            Python's Natural Language Toolkit (NLTK), Flask & d3.js
          </a>
        </div>
      </div>
    )
  }
};
