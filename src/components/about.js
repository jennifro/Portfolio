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
                <h4 className="title">Work Experience</h4>
                <CareerBio />
                <br />
                <h4 className="title">Volunteer Experience</h4>
                <VolunteerBio />
                <br />
                <h4 className="title">Just Jennifer</h4>
                <PersonalAbout />
            </div>
        )
    }
};


