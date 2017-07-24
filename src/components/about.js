import React, { Component } from 'react';

const AboutTitle = () => <h1 id="about-title">About Jennifer</h1>;
const CareerAbout = () => <p>{BioText.Career}</p>;
const BioText = {
    Career: `All your base are belong to us. All your base are belong to us. All your base are belong to us. All your base are belong to us. 
    All your base are belong to us. All your base are belong to us. All your base are belong to us. All your base are belong to us. 
    All your base are belong to us. All your base are belong to us. All your base are belong to us. All your base are belong to us. 
    All your base are belong to us. All your base are belong to us. All your base are belong to us. All your base are belong to us. 
    All your base are belong to us. All your base are belong to us. All your base are belong to us. All your base are belong to us.`,

};


export default class About extends Component {

    render() {
        return (
            <div className="about-container">
                <AboutTitle />
                <CareerAbout />
            </div>
        )
    }
};


