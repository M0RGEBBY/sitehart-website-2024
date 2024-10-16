import React from 'react'
import { Button } from './Buttons'
import './ExampleHeroSection.css';
import '../App.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function HeroSection() {


    return (
        <div className='example-hero-container'>
            <video src="../Images/fire.mp4" className='fire-vid' autoPlay loop muted />
            <h1>Examples</h1>
            <p>Check out some of the websites designed by SiteHart!</p>

        </div>
    )
}

export default HeroSection