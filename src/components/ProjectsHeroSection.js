import React from 'react'
import { Button } from './Buttons'
import './ProjectsHeroSection.css';
import '../App.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function HeroSection() {


    return (
        <div className='example-hero-container'>
            <h1>Projects</h1>
            <p>Take a journey through my project space!</p>

        </div>
    )
}

export default HeroSection