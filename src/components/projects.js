import React, { Component } from 'react';

export default class ProjectContainer extends Component {
  render() {
    return (
      <div className="project-page">
        <div className="discover-bloom">
          <a href="https://app.discoverbloom.com/">
            Bloom, online indigenous language learning.
          </a>
        </div>
        <div className='feelin-presidential' >
          <a href="https://feeling-prez.herokuapp.com/">
            Feeling Presidential, a sentiment analysis project with
            Python's Natural Language Toolkit (NLTK), Flask & d3.js
          </a>
        </div>
      </div>
    )
  }
};
