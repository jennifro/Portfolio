import React, { Component } from 'react';

import CareerBio from './bios/careerbio.js';
import VolunteerBio from './bios/volunteerbio.js';
import PersonalBio from './bios/personalbio.js';


const CareerAbout = () => <p>{CareerBio}</p>;
const VolunteerAbout = () => <p>{VolunteerBio}</p>
const PersonalAbout = () => <p>{PersonalBio}}</p>


export default class About extends Component {

    render() {
        return (
            <div className="about-container">
                <h4>Work Experience</h4>
                <CareerAbout />
                <h4>Volunteer Experience</h4>
                <VolunteerAbout />
                <h4>Just Jennifer</h4>
                <PersonalAbout />
            </div>
        )
    }
};


