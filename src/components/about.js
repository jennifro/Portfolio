import React, { Component } from 'react';

const AboutTitle = () => <h1 id="about-title">About Jennifer</h1>;
const CareerAbout = () => <p>{BioText.Career}</p>;
const VolunteerAbout = () => <p>{BioText.Volunteer}</p>
const PersonalAbout = () => <p>{BioText.Personal}</p>
const BioText = {
    Career: ``,
    Volunteer: ``,
    Personal: ``
};


export default class About extends Component {

    render() {
        return (
            <div className="about-container">
                <AboutTitle />
                <h4>Work Experience</h4>
                <CareerAbout />
                <h4>Volunteer Experience</h4>
                <VolunteerAbout />
                <h4>Personal</h4>
                <PersonalAbout />
            </div>
        )
    }
};


