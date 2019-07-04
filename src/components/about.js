import React, { Component } from 'react';

import CareerBio from './bios/careerbio.js';
import VolunteerBio from './bios/volunteerbio.js';
import PersonalBio from './bios/personalbio.js';

import './about.css';


// const CareerAbout = () => <p id='career-bio'>{CareerBio}</p>;
// const VolunteerAbout = () => <p>{VolunteerBio}</p>
const PersonalAbout = () => <p>{PersonalBio}</p>


export default class About extends Component {

    render() {
        return (
            <div className="about-container" id="about">
                <h2 className="title">Work Experience</h2>
                <CareerBio />
                <br />
                <h2 className="title">Volunteer Experience</h2>
                <VolunteerBio />
                <br />
                <h2 className="title">Just Jennifer</h2>
                <PersonalAbout />
            </div>
        )
    }
};


